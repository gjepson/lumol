// Cymbalum, an extensible molecular simulation engine
// Copyright (C) 2015-2016 G. Fraux — BSD license
use toml::Table;
use input::error::{Error, Result};
use input::{FromToml, FromTomlWithData};

use simulation::*;
use units;

impl FromToml for MolecularDynamics {
    fn from_toml(config: &Table) -> Result<MolecularDynamics> {
        // Get the timestep of the simulation
        let timestep = extract_str!("timestep", config as "molecular dynamics propagator");
        let timestep = try!(units::from_str(timestep));

        let mut md;
        if let Some(integrator) = config.get("integrator") {
            let integrator = try!(integrator.as_table().ok_or(
                Error::from("'integrator' must be a table in molecular dynamics")
            ));

            let integrator: Box<Integrator> = match extract_type!(integrator) {
                "BerendsenBarostat" => Box::new(try!(
                    BerendsenBarostat::from_toml(integrator, timestep)
                )),
                "AnisoBerendsenBarostat" => Box::new(try!(
                    AnisoBerendsenBarostat::from_toml(integrator, timestep)
                )),
                "Verlet" => Box::new(try!(
                    Verlet::from_toml(integrator, timestep)
                )),
                "VelocityVerlet" => Box::new(try!(
                    VelocityVerlet::from_toml(integrator, timestep)
                )),
                "LeapFrog" => Box::new(try!(
                    LeapFrog::from_toml(integrator, timestep)
                )),
                other => return Err(Error::from(
                    format!("Unknown integrator '{}'", other)
                ))
            };

            md = MolecularDynamics::from_integrator(integrator);
        } else {
            md = MolecularDynamics::new(timestep);
        }

        if let Some(thermostat) = config.get("thermostat") {
            let thermostat = try!(thermostat.as_table().ok_or(
                Error::from("'thermostat' must be a table in molecular dynamics")
            ));

            let thermostat: Box<Thermostat> = match extract_type!(thermostat) {
                "Berendsen" => Box::new(try!(
                    BerendsenThermostat::from_toml(thermostat)
                )),
                "Rescale" => Box::new(try!(
                    RescaleThermostat::from_toml(thermostat)
                )),
                other => return Err(Error::from(
                    format!("Unknown thermostat type '{}'", other)
                ))
            };
            md.set_thermostat(thermostat);
        }

        if let Some(controls) = config.get("controls") {
            let controls = try!(controls.as_slice().ok_or(
                Error::from("'controls' must be an array in molecular dynamics")
            ));

            for control in controls {
                let control = try!(control.as_table().ok_or(
                    Error::from("All controls must be tables in molecular dynamics")
                ));

                let control: Box<Control> = match extract_type!(control) {
                    "RemoveTranslation" => Box::new(try!(
                        RemoveTranslation::from_toml(control)
                    )),
                    "RemoveRotation" => Box::new(try!(
                        RemoveRotation::from_toml(control)
                    )),
                    other => return Err(Error::from(
                        format!("Unknown control '{}'", other)
                    ))
                };
                md.add_control(control);
            }
        }

        Ok(md)
    }
}

/******************************************************************************/

impl FromTomlWithData for Verlet {
    type Data = f64;
    fn from_toml(_: &Table, timestep: f64) -> Result<Verlet> {
        Ok(Verlet::new(timestep))
    }
}

impl FromTomlWithData for VelocityVerlet {
    type Data = f64;
    fn from_toml(_: &Table, timestep: f64) -> Result<VelocityVerlet> {
        Ok(VelocityVerlet::new(timestep))
    }
}

impl FromTomlWithData for LeapFrog {
    type Data = f64;
    fn from_toml(_: &Table, timestep: f64) -> Result<LeapFrog> {
        Ok(LeapFrog::new(timestep))
    }
}

impl FromTomlWithData for BerendsenBarostat {
    type Data = f64;
    fn from_toml(config: &Table, timestep: f64) -> Result<BerendsenBarostat> {
        let pressure = extract_str!("pressure", config as "Berendsen barostat");
        let pressure = try!(units::from_str(pressure));
        let tau = extract_number!("timestep", config as "Berendsen barostat");
        Ok(BerendsenBarostat::new(timestep, pressure, tau))
    }
}

impl FromTomlWithData for AnisoBerendsenBarostat {
    type Data = f64;
    fn from_toml(config: &Table, timestep: f64) -> Result<AnisoBerendsenBarostat> {
        // TODO: implement a way to give the stress matrix
        let pressure = extract_str!("pressure", config as "anisotropic Berendsen barostat");
        let pressure = try!(units::from_str(pressure));
        let tau = extract_number!("timestep", config as "anisotropic Berendsen barostat");
        Ok(AnisoBerendsenBarostat::hydrostatic(timestep, pressure, tau))
    }
}

/******************************************************************************/

impl FromToml for BerendsenThermostat {
    fn from_toml(config: &Table) -> Result<BerendsenThermostat> {
        let temperature = extract_str!("temperature", config as "Berendsen thermostat");
        let temperature = try!(units::from_str(temperature));
        let tau = extract_number!("timestep", config as "Berendsen thermostat");
        Ok(BerendsenThermostat::new(temperature, tau))
    }
}

impl FromToml for RescaleThermostat {
    fn from_toml(config: &Table) -> Result<RescaleThermostat> {
        let temperature = extract_str!("temperature", config as "Berendsen thermostat");
        let temperature = try!(units::from_str(temperature));

        if let Some(tolerance) = config.get("tolerance") {
            let tolerance = try!(tolerance.as_str().ok_or(
                Error::from("'tolerance' must be a string rescale thermostat")
            ));
            let tolerance = try!(units::from_str(tolerance));

            Ok(RescaleThermostat::with_tolerance(temperature, tolerance))
        } else {
            Ok(RescaleThermostat::new(temperature))
        }
    }
}

impl FromToml for RemoveTranslation {
    fn from_toml(_: &Table) -> Result<RemoveTranslation> {
        Ok(RemoveTranslation)
    }
}

impl FromToml for RemoveRotation {
    fn from_toml(_: &Table) -> Result<RemoveRotation> {
        Ok(RemoveRotation)
    }
}

#[cfg(test)]
mod tests {
    use std::path::Path;
    use input::read_config;
    use input::testing::{cleanup, bad_inputs};

    #[test]
    fn md() {
        let path = Path::new(file!()).parent().unwrap()
                                     .join("data")
                                     .join("md.toml");
        assert!(read_config(&path).is_ok());
        cleanup(&path);
    }

    #[test]
    fn bad_md() {
        for path in bad_inputs("simulations", "md") {
            assert!(read_config(path).is_err());
        }
    }
}
