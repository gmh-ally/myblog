(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{472:function(t,v,_){"use strict";_.r(v);var s=_(2),e=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"事件循环"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),v("ol",[v("li",[t._v("事件循环就是编译器解析与执行代码的规则")])]),t._v(" "),v("p",[t._v("js本身就是单线程的，既同一时刻只能干一件事，而 js任务包含了"),v("code",[t._v("同步任务")]),t._v("和"),v("code",[t._v("异步任务")]),t._v("，浏览器会率先执行同步代码，将异步代码放到消息队列中，待主线程任务完成后 在执行异步代码，而异步代码又分为 "),v("code",[t._v("宏任务")]),t._v(" 和 "),v("code",[t._v("微任务")]),t._v(" ，在同步代码执行完成后，会先执行 异步代码的微任务 在执行宏任务, 如果异步任务中仍有异步任务，会继续放到消息队列中 依次类推，就会形成 "),v("code",[t._v("事件循环")])]),t._v(" "),v("h2",{attrs:{id:"宏任务有"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#宏任务有"}},[t._v("#")]),t._v(" 宏任务有")]),t._v(" "),v("ol",[v("li",[t._v("script（整体代码）")]),t._v(" "),v("li",[t._v("setTimeout")]),t._v(" "),v("li",[t._v("setInterval")]),t._v(" "),v("li",[t._v("I/O 操作")]),t._v(" "),v("li",[t._v("UI 渲染等")])]),t._v(" "),v("p",[t._v("特点：不唯一性 存在优先级 异步执行，同一事件循环中，只执行一个")]),t._v(" "),v("h2",{attrs:{id:"微任务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微任务"}},[t._v("#")]),t._v(" 微任务")]),t._v(" "),v("ol",[v("li",[t._v("promise.then()")]),t._v(" "),v("li",[t._v("promise.catch()")])]),t._v(" "),v("p",[t._v("特点： 唯一性 整个事件循环只存在一个， 执行同步")])])}),[],!1,null,null,null);v.default=e.exports}}]);