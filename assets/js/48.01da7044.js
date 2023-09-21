(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{467:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"面向对象编程-原型链-继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面向对象编程-原型链-继承"}},[t._v("#")]),t._v(" ⾯向对象编程/原型链/继承")]),t._v(" "),s("h2",{attrs:{id:"面向对象编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面向对象编程"}},[t._v("#")]),t._v(" ⾯向对象编程")]),t._v(" "),s("h3",{attrs:{id:"_1-什么是面向对象编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是面向对象编程"}},[t._v("#")]),t._v(" 1. 什么是⾯向对象编程？")]),t._v(" "),s("p",[t._v("⾯向对象是⼀种编程思想，经常被拿来和⾯向过程⽐较。")]),t._v(" "),s("p",[t._v("⾯向过程关注的重点是动词，是分析出解决问题需要的步骤，然后编写函数实现每个步骤，最后依次调⽤函数。\n⾯向对象关注的重点是主谓，是把构成问题的事物拆解为各个对象，⽽拆解出对象的⽬的也不是为了实现某个步骤，⽽是为了描述这个事物在当前问题中的各种⾏为。\n⾯向对象的特点是什么？")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("封装：让使⽤对象的⼈不考虑内部实现，只考虑功能使⽤ 把内部的代码保护起来，只留出⼀些 api 接⼝供⽤户使⽤")])]),t._v(" "),s("li",[s("p",[t._v("继承：就是为了代码的复⽤，从⽗类上继承出⼀些⽅法和属性，⼦类也有⾃⼰的⼀些属性")])]),t._v(" "),s("li",[s("p",[t._v("多态：是不同对象作⽤于同⼀操作产⽣不同的效果。多态的思想实际上是把“想做什么”和“谁去做“分开")])])]),t._v(" "),s("p",[t._v("什么时候适合使⽤⾯向对象?")]),t._v(" "),s("p",[t._v("在⽐较复杂的问题⾯前，或者参与⽅较多的时候，⾯向对象的编程思想可以很好的简化问题，并且能够更好的扩展和维护。")]),t._v(" "),s("p",[t._v("Js 中的⾯向对象")]),t._v(" "),s("ol",[s("li",[t._v("对象包含什么")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("属性")])]),t._v(" "),s("li",[s("p",[t._v("方法")])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("⼀些内置对象")])]),t._v(" "),s("ul",[s("li",[t._v("Object")]),t._v(" "),s("li",[t._v("Array")]),t._v(" "),s("li",[t._v("Date")]),t._v(" "),s("li",[t._v("Function")]),t._v(" "),s("li",[t._v("RegExp")])]),t._v(" "),s("p",[t._v("创建对象")]),t._v(" "),s("p",[t._v("普通⽅式")]),t._v(" "),s("p",[t._v("每⼀个新对象都要重新写⼀遍 color 和 start 的赋值")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),t._v("\nPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white下棋'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ⼯⼚模式")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),t._v("\n  Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white下棋'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Player\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("这两种⽅式都⽆法识别对象类型，⽐如 Player 的类型只是 Object")])]),t._v(" "),s("ol",[s("li",[t._v("构造函数/实例")])]),t._v(" "),s("p",[t._v("通过 this 添加的属性和⽅法总是指向当前对象的，所以在实例化的时候，通过 this 添加的属性和⽅法都会在内存中复制⼀份，这样就会造成内存的浪费。\n但是这样创建的好处是即使改变了某⼀个对象的属性或⽅法，不会影响其他的对象（因为每⼀个对象都是复制的⼀份）")]),t._v(" "),s("p",[t._v("4.附赠一张原型链的图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/myblog/images/js/proto_prototype.jpg",alt:"proto"}})]),t._v(" "),s("h3",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/365992011",target:"_blank",rel:"noopener noreferrer"}},[t._v("面向对象编程 & 原型及原型链"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);