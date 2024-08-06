(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{486:function(e,r,t){"use strict";t.r(r);var _=t(2),a=Object(_.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"前端性能优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化"}},[e._v("#")]),e._v(" 前端性能优化")]),e._v(" "),r("h2",{attrs:{id:"_1-前置知识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-前置知识"}},[e._v("#")]),e._v(" 1. 前置知识")]),e._v(" "),r("ol",[r("li",[e._v("从输入url到页面最终呈现发生了什么？")])]),e._v(" "),r("ul",[r("li",[e._v("前一个页面卸载")]),e._v(" "),r("li",[e._v("DNS解析，把域名解析成IP，才能访问主机(服务器)")]),e._v(" "),r("li",[e._v("TCP三次握手")]),e._v(" "),r("li",[e._v("Request请求")]),e._v(" "),r("li",[e._v("Response响应")]),e._v(" "),r("li",[e._v("HTML、CSS解析")]),e._v(" "),r("li",[e._v("onLoad加载, 页面绘制")])]),e._v(" "),r("h3",{attrs:{id:"_2-tcp三次握手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-tcp三次握手"}},[e._v("#")]),e._v(" 2. TCP三次握手")]),e._v(" "),r("ol",[r("li",[e._v("第⼀次握⼿：客户端发送连接请求报⽂段，将SYN位置为1，Sequence Number为x；然后，客户端进⼊SYN_SENT状态，等待服务器的确认；")]),e._v(" "),r("li",[e._v("第⼆次握⼿：服务器收到客户端的SYN报⽂段，需要对这个SYN报⽂段进⾏确认，设置Acknowledgment Number为x+1(Sequence Number+1)；同时，⾃⼰还要发送SYN请求信息，将SYN位置为1，Sequence Number为y；服务器端将上述的SYN+ACK报⽂段⼀并发送给客户端，此时服务器进⼊SYN_RCVD状态；")]),e._v(" "),r("li",[e._v("第三次握⼿：客户端收到服务器的SYN+ACK报⽂段。然后将Acknowledgment Number设置为y+1，向服务器发送ACK报⽂段，这个报⽂段发送完毕以后，客户端和服务器端都进⼊ESTABLISHED状态，完成TCP三次握⼿。")])]),e._v(" "),r("h3",{attrs:{id:"_3-tcp四次挥手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-tcp四次挥手"}},[e._v("#")]),e._v(" 3. TCP四次挥手")]),e._v(" "),r("ol",[r("li",[e._v("第⼀次握⼿：客户端发送连接请求报⽂段，将SYN位置为1，Sequence Number为x；然后，客户端进⼊SYN_SENT状态，等待服务器的确认；")]),e._v(" "),r("li",[e._v("第⼆次握⼿：服务器收到客户端的SYN报⽂段，需要对这个SYN报⽂段进⾏确认，设置Acknowledgment Number为x+1(Sequence Number+1)；同时，⾃⼰还要发送SYN请求信息，将SYN位置为1，Sequence Number为y；服务器端将上述的SYN+ACK报⽂段⼀并发送给客户端，此时服务器进⼊SYN_RCVD状态；")]),e._v(" "),r("li",[e._v("第三次握⼿：客户端收到服务器的SYN+ACK报⽂段。然后将Acknowledgment Number设置为y+1，向服务器发送ACK报⽂段，这个报⽂段发送完毕以后，客户端和服务器端都进⼊ESTABLISHED状态，完成TCP三次握⼿。")])]),e._v(" "),r("h2",{attrs:{id:"_2-性能检测工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-性能检测工具"}},[e._v("#")]),e._v(" 2. 性能检测工具")]),e._v(" "),r("h4",{attrs:{id:"原理-就是在合适的时机-打上合适的时间戳-或者暴露出事件。然后通过这些时间戳之间的差值-得出一个耗时时间。这个耗时时间就可以反映出我们⻚面的相关性能。常见的性能检测工具如下"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原理-就是在合适的时机-打上合适的时间戳-或者暴露出事件。然后通过这些时间戳之间的差值-得出一个耗时时间。这个耗时时间就可以反映出我们⻚面的相关性能。常见的性能检测工具如下"}},[e._v("#")]),e._v(" 原理：就是在合适的时机，打上合适的时间戳，或者暴露出事件。然后通过这些时间戳之间的差值，得出⼀个耗时时间。这个耗时时间就可以反映出我们⻚⾯的相关性能。常见的性能检测工具如下：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("window全局作用域API：Performance(opens new window)")])]),e._v(" "),r("li",[r("p",[e._v("性能检测对象：PerformanceObserver.observe()(opens new window)")])]),e._v(" "),r("li",[r("p",[e._v("前端框架：web-vitals")])])]),e._v(" "),r("h3",{attrs:{id:"_1-performance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-performance"}},[e._v("#")]),e._v(" 1. Performance")]),e._v(" "),r("p",[e._v("Performance 接⼝可以获取到当前⻚⾯中与性能相关的信息。它是 High Resolution Time API 的⼀部分， 同时也融合了 Performance Timeline API、Navigation Timing API、 User Timing API 和 Resource Timing API。")])])}),[],!1,null,null,null);r.default=a.exports}}]);