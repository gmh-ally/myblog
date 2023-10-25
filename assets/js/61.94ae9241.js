(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{480:function(t,s,a){"use strict";a.r(s);var r=a(2),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"ts中的基本类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts中的基本类型"}},[t._v("#")]),t._v(" TS中的基本类型")]),t._v(" "),s("h2",{attrs:{id:"一、类型声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、类型声明"}},[t._v("#")]),t._v(" 一、类型声明")]),t._v(" "),s("p",[t._v("在系统地介绍typescript的基本类型前，我们先学会如何进行类型声明：")]),t._v(" "),s("h4",{attrs:{id:"_1-通过-符号进行变量的类型声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过-符号进行变量的类型声明"}},[t._v("#")]),t._v(' 1. 通过":"符号进行变量的类型声明')]),t._v(" "),s("p",[t._v("直接对某个变量进行类型声明")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("变量")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 类型\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("num")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("str")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-通过type关键字进行类型别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过type关键字进行类型别名"}},[t._v("#")]),t._v(" 2. 通过type关键字进行类型别名")]),t._v(" "),s("p",[t._v("可以将目标类型通过type进行存储、复用。")]),t._v(" "),s("p",[t._v("注意，type声明的类型别名必须要首字母大写。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("type SnType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" number\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明好的SnType类型可以在多个地方使用")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" StrType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" StrType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("\n")])])]),s("h2",{attrs:{id:"二、基本类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、基本类型"}},[t._v("#")]),t._v(" 二、基本类型")]),t._v(" "),s("h4",{attrs:{id:"_1-字符串string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-字符串string"}},[t._v("#")]),t._v(" 1.字符串String")]),t._v(" "),s("p",[t._v("无论是字符串或者是模板字符串，都是通过string进行定义：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("heelo ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n\n")])])]),s("h4",{attrs:{id:"_2-数值number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-数值number"}},[t._v("#")]),t._v(" 2.数值Number")]),t._v(" "),s("p",[t._v("常规的2进制，8进制，10进制，16进制都支持：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b1111")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0o17")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("c")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xF")]),t._v("\n")])])]),s("h4",{attrs:{id:"_3-布尔boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-布尔boolean"}},[t._v("#")]),t._v(" 3.布尔Boolean")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);