(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{395:function(t,e,a){"use strict";a.r(e);var v=a(25),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"字符串格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串格式"}},[t._v("#")]),t._v(" 字符串格式")]),t._v(" "),a("p",[t._v("字符串格式是 CKYU 原生所使用的消息格式，在本协议中将继续使用以保持兼容。在字符串格式中，无论纯文本还是图片、表情、链接分享等多媒体内容都放在同一个字符串里，即，一条消息对应一个字符串。以下是一个字符串格式消息的例子：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[CQ:face,id=178]看看我刚拍的照片[CQ:image,file=123.jpg]\n")])])]),a("p",[t._v("在调用 API 发送这段消息时，JSON 如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10001000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[CQ:face,id=178]看看我刚拍的照片[CQ:image,file=123.jpg]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"cq-码格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cq-码格式"}},[t._v("#")]),t._v(" CQ 码格式")]),t._v(" "),a("p",[t._v("消息中的多媒体内容使用 CQ 码来表示，形如 "),a("code",[t._v("[CQ:face,id=178]")]),t._v("。其中，"),a("code",[t._v("[CQ:]")]),t._v(" 是固定格式；"),a("code",[t._v("face")]),t._v(" 是「功能名」，除了 "),a("code",[t._v("face")]),t._v(" 还有许多不同的功能名；"),a("code",[t._v("id=178")]),t._v(" 是「参数」，某些功能不需要参数，而另一些需要多个参数，当有多个参数时，参数间使用逗号分隔。")]),t._v(" "),a("p",[t._v("一些 CQ 码的例子如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[CQ:shake]\n[CQ:face,id=178]\n[CQ:share,title=标题,url=http://baidu.com]\n")])])]),a("p",[t._v("更多 CQ 码功能请参考 "),a("RouterLink",{attrs:{to:"/specs/message/segment.html"}},[t._v("消息段类型")]),t._v("。")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("CQ 码中不应有多余的空格，例如不应该使用 "),a("code",[t._v("[CQ:face, id=178]")]),t._v("。")]),t._v(" "),a("p",[t._v("CQ 码的参数值可以包含空格、换行、除 "),a("code",[t._v("[],&")]),t._v(" 之外的特殊符号等。在解析时，应直接取 "),a("code",[t._v("[CQ:")]),t._v(" 后、第一个 "),a("code",[t._v(",")]),t._v(" 或 "),a("code",[t._v("]")]),t._v(" 前的部分为功能名，第一个 "),a("code",[t._v(",")]),t._v(" 之后到 "),a("code",[t._v("]")]),t._v(" 之间的部分为参数，按 "),a("code",[t._v(",")]),t._v(" 分割后，每个部分第一个 "),a("code",[t._v("=")]),t._v(" 前的内容为参数名，之后的部分为参数值。例如 "),a("code",[t._v("[CQ:share,title=标题中有=等号,url=http://baidu.com]")]),t._v(" 中，功能名为 "),a("code",[t._v("share")]),t._v("，"),a("code",[t._v("title")]),t._v(" 参数值为 "),a("code",[t._v("标题中有=等号")]),t._v("，"),a("code",[t._v("url")]),t._v(" 参数值为 "),a("code",[t._v("http://baidu.com")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"转义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转义"}},[t._v("#")]),t._v(" 转义")]),t._v(" "),a("p",[t._v("CQ 码中包含一些特殊字符："),a("code",[t._v("[")]),t._v("、"),a("code",[t._v("]")]),t._v("、"),a("code",[t._v(",")]),t._v(" 等，而 CQ 码又是可能混杂在纯文本内容之中的，因此消息中的纯文本内容需要对特殊字符进行转义，以避免歧义。具体的转义规则如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("转义前")]),t._v(" "),a("th",[t._v("转义后")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("&")])]),t._v(" "),a("td",[a("code",[t._v("&amp;")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[")])]),t._v(" "),a("td",[a("code",[t._v("&#91;")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("]")])]),t._v(" "),a("td",[a("code",[t._v("&#93;")])])])])]),t._v(" "),a("p",[t._v("例如，一个纯文本消息转义前内容如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("- [x] 使用 `&data` 获取地址\n")])])]),a("p",[t._v("转义后如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("- &#91;x&#93; 使用 `&amp;data` 获取地址\n")])])]),a("p",[t._v("另一方面，CQ 码内部的参数值也可能出现特殊字符，也是需要转义的。由于 "),a("code",[t._v(",")]),t._v("（半角逗号）在 CQ 码中用于分隔参数，因此除了上面的转义规则，还需要对 "),a("code",[t._v(",")]),t._v(" 进行转义，如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("转义前")]),t._v(" "),a("th",[t._v("转义后")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("&")])]),t._v(" "),a("td",[a("code",[t._v("&amp;")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[")])]),t._v(" "),a("td",[a("code",[t._v("&#91;")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("]")])]),t._v(" "),a("td",[a("code",[t._v("&#93;")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v(",")])]),t._v(" "),a("td",[a("code",[t._v("&#44;")])])])])]),t._v(" "),a("p",[t._v("例如，一个链接分享消息的 CQ 码可能如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[CQ:share,title=震惊&#44;小伙睡觉前居然...,url=http://baidu.com/?a=1&amp;b=2]\n")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);