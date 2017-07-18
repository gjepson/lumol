(function() {var implementors = {};
implementors["lumol"] = ["impl&lt;A, S, S2, D, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S2, E&gt;&gt; for <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;A, Output = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataOwned.html\" title=\"trait ndarray::data_traits::DataOwned\">DataOwned</a>&lt;Elem = A&gt; + <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataMut.html\" title=\"trait ndarray::data_traits::DataMut\">DataMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = A&gt;,&nbsp;</span>","impl&lt;'a, A, S, S2, D, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S2, E&gt;&gt; for <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;A, Output = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataMut.html\" title=\"trait ndarray::data_traits::DataMut\">DataMut</a>&lt;Elem = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = A&gt;,&nbsp;</span>","impl&lt;'a, 'b, A, S, S2, D, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S2, E&gt;&gt; for &amp;'b <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;A, Output = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = A&gt;,&nbsp;</span>","impl&lt;A, S, D, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;B&gt; for <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;B, Output = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/impl_ops/trait.ScalarOperand.html\" title=\"trait ndarray::impl_ops::ScalarOperand\">ScalarOperand</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataOwned.html\" title=\"trait ndarray::data_traits::DataOwned\">DataOwned</a>&lt;Elem = A&gt; + <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataMut.html\" title=\"trait ndarray::data_traits::DataMut\">DataMut</a>,&nbsp;</span>","impl&lt;'a, A, S, D, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;B&gt; for &amp;'a <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;B, Output = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/impl_ops/trait.ScalarOperand.html\" title=\"trait ndarray::impl_ops::ScalarOperand\">ScalarOperand</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = A&gt;,&nbsp;</span>","impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataOwned.html\" title=\"trait ndarray::data_traits::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a>&gt; + <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataMut.html\" title=\"trait ndarray::data_traits::DataMut\">DataMut</a>,&nbsp;</span>","impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a>&gt;,&nbsp;</span>","impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataOwned.html\" title=\"trait ndarray::data_traits::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataMut.html\" title=\"trait ndarray::data_traits::DataMut\">DataMut</a>,&nbsp;</span>","impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,&nbsp;</span>","impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataOwned.html\" title=\"trait ndarray::data_traits::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>&gt; + <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataMut.html\" title=\"trait ndarray::data_traits::DataMut\">DataMut</a>,&nbsp;</span>","impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>&gt;,&nbsp;</span>","impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataOwned.html\" title=\"trait ndarray::data_traits::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>&gt; + <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataMut.html\" title=\"trait ndarray::data_traits::DataMut\">DataMut</a>,&nbsp;</span>","impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>&gt;,&nbsp;</span>","impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataOwned.html\" title=\"trait ndarray::data_traits::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt; + <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataMut.html\" title=\"trait ndarray::data_traits::DataMut\">DataMut</a>,&nbsp;</span>","impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt;,&nbsp;</span>","impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataOwned.html\" title=\"trait ndarray::data_traits::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataMut.html\" title=\"trait ndarray::data_traits::DataMut\">DataMut</a>,&nbsp;</span>","impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;,&nbsp;</span>","impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataOwned.html\" title=\"trait ndarray::data_traits::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt; + <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataMut.html\" title=\"trait ndarray::data_traits::DataMut\">DataMut</a>,&nbsp;</span>","impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;,&nbsp;</span>","impl&lt;S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;<a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataOwned.html\" title=\"trait ndarray::data_traits::DataOwned\">DataOwned</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; + <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.DataMut.html\" title=\"trait ndarray::data_traits::DataMut\">DataMut</a>,&nbsp;</span>","impl&lt;'a, S, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Shr.html\" title=\"trait core::ops::Shr\">Shr</a>&lt;&amp;'a <a class=\"struct\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"http://bluss.github.io/rust-ndarray/master/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt;,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
