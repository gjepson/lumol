// Lumol, an extensible molecular simulation engine
// Copyright (C) Lumol's contributors — BSD license

//! Lumol is a classical molecular simulation engine that provides a solid
//! base for developing new algorithms and methods.
//!
//! Using Lumol, you can customize the behavior of all the algorithms in a
//! simulation (from force fields to barostats and Monte Carlo moves).
//!
//! Lumol goals are to be:
//!
//! - **Easy to extend**: the code is modular, object-oriented, well documented,
//!   well tested, open-source and readable;
//! - **Easy to use**: the user interface is nice, with human-oriented input
//!   files;
//! - **Stable**: it will never crash on a good input, and provides helpful
//!   error messages.

#![warn(missing_docs, trivial_casts, unused_import_braces, variant_size_differences)]
#![warn(unused_qualifications, unused_results)]
// Clippy configuration
#![allow(unknown_lints)]
#![warn(clippy, clippy_pedantic)]
#![allow(float_arithmetic, integer_arithmetic, indexing_slicing, needless_return)]
#![allow(needless_range_loop, shadow_reuse, shadow_same, shadow_unrelated)]
#![allow(cast_possible_truncation, cast_precision_loss, cast_sign_loss, cast_possible_wrap)]
#![allow(float_cmp, or_fun_call, string_add, non_ascii_literal, doc_markdown)]
#![allow(missing_docs_in_private_items, module_inception, stutter, unseparated_literal_suffix)]
#![allow(new_without_default, new_without_default_derive, zero_ptr, use_self, borrowed_box)]
#![allow(range_plus_one, needless_pass_by_value)]

#[macro_use]
extern crate bitflags;
#[macro_use]
extern crate itertools;
#[macro_use]
extern crate lazy_static;
#[macro_use]
extern crate log;
#[macro_use]
extern crate log_once;
#[macro_use]
extern crate soa_derive;

#[cfg(test)]
#[macro_use]
extern crate approx;

extern crate caldyn;
extern crate chemfiles;
extern crate ndarray;
extern crate ndarray_parallel;
extern crate num_traits as num;
extern crate rand;
extern crate rayon;
extern crate special;
extern crate thread_local;

/// Log a fatal error, and then panic with the same message
macro_rules! fatal_error {
    ($($args:tt)*) => {{
        error!($($args)*);
        panic!($($args)*);
    }};
}

/// Log an internal fatal error, and then panic with the same message
macro_rules! internal_error {
    ($arg: expr) => {{
        let message = format!("Internal error: {}", $arg);
        fatal_error!("{}", message);
    }};
}


// Helper modules
#[macro_use]
mod utils;
mod math;

// Main modules
pub mod units;
pub mod consts;
pub mod types;
pub mod energy;
pub mod sys;
pub mod sim;
pub mod out;
pub mod parallel;
