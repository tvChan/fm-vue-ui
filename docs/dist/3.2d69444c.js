webpackJsonp([3],{232:function(t,s,a){t.exports=a(238)},238:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var l={methods:{showDialog:function(t){this.$fmdialog({type:1===t?"success":"failure",message:"我是对话框"})},showMaskDialog:function(){this.$fmdialog({type:"success",message:"我是对话框, 并且带了炫酷的遮罩, 哈哈哈哈",mask:!0})},showInteractionDialog:function(t){this.$fmdialog({message:"有交互行为的对话框",isSingle:t,onConfirm:function(){return alert("点击了确认")}})}}},e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[t._m(0,!1,!1),t._v(" "),a("p",[t._v("在保留当前页面状态的情况下，告知用户并承载相关操作。")]),t._v(" "),t._m(1,!1,!1),t._v(" "),a("p",[t._v("Dialog 弹出一个对话框，适合需要定制性更大的场景。")]),t._v(" "),a("docs-demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("fm-button",{on:{click:function(s){t.showDialog(1)}}},[t._v("显示Dialog")]),t._v(" "),a("fm-button",{on:{click:function(s){t.showDialog(2)}}},[t._v("警告Dialog")])],1),t._v(" "),a("p",[t._v("Dialog 以 "),a("code",[t._v("$fmdialog")]),t._v(" 属性挂载在 Vue Components 上, 可以在组件内通过 "),a("code",[t._v("this.$fmdialog")]),t._v(" 的方式直接调用。")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"showDialog(1)"')]),t._v(">")]),t._v("显示Dialog"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"showDialog(2)"')]),t._v(">")]),t._v("警告Dialog"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-button")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        showDialog(flag) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$fmdialog({\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": flag === "),a("span",{attrs:{class:"hljs-number"}},[t._v("1")]),t._v(" ? "),a("span",{attrs:{class:"hljs-string"}},[t._v("'success'")]),t._v(" : "),a("span",{attrs:{class:"hljs-string"}},[t._v("'failure'")]),t._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("message")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'我是对话框'")]),t._v("\n            });\n        }\n    }\n  };\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("   \n")])])]),t._v(" "),t._m(2,!1,!1),t._v(" "),a("docs-demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("fm-button",{on:{click:t.showMaskDialog}},[t._v("显示Mask")])],1),t._v(" "),a("p",[a("code",[t._v("mask")]),t._v(" 属性是一个 "),a("code",[t._v("Boolean")]),t._v(" 值, 默认是 "),a("code",[t._v("false")]),t._v(".")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"showMaskDialog"')]),t._v(">")]),t._v("显示Mask"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-button")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        showMaskDialog() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$fmdialog({\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'success'")]),t._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("message")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'我是对话框, 并且带了炫酷的遮罩'")]),t._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("mask")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n            });\n        }\n    }\n  };\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("   \n")])])]),t._v(" "),t._m(3,!1,!1),t._v(" "),a("docs-demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("fm-button",{on:{click:function(s){t.showInteractionDialog(!1)}}},[t._v("两个按钮")]),t._v(" "),a("fm-button",{on:{click:function(s){t.showInteractionDialog(!0)}}},[t._v("一个按钮")])],1),t._v(" "),a("p",[a("code",[t._v("isSingle")]),t._v(" 属性是一个 "),a("code",[t._v("Boolean")]),t._v(" 值, 默认是 "),a("code",[t._v("false")]),t._v(", 表示是否只显示确认按钮. 显示带交互行为的对话框时, 需要传入 "),a("code",[t._v("onConfirm")]),t._v(" 回调.")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"showInteractionDialog(false)"')]),t._v(">")]),t._v("两个按钮"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"showInteractionDialog(true)"')]),t._v(">")]),t._v("一个按钮"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-button")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        showInteractionDialog(isSingle) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$fmdialog({\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("message")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'有交互行为的对话框'")]),t._v(",\n                isSingle,\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("onConfirm")]),t._v(": "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[t._v("()")]),t._v(" =>")]),t._v(" alert("),a("span",{attrs:{class:"hljs-string"}},[t._v("'点击了确认'")]),t._v(")\n            });\n        }\n    }\n  };\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("   \n")])])]),t._v(" "),t._m(4,!1,!1),t._v(" "),t._m(5,!1,!1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"dialog-dui-hua-kuang"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dialog-dui-hua-kuang","aria-hidden":"true"}},[this._v("¶")]),this._v(" Dialog 对话框")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"ji-ben-yong-fa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa","aria-hidden":"true"}},[this._v("¶")]),this._v(" 基本用法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("对话框弹出默认是没有后层遮罩的, 如果需要遮罩, 可以设置 "),s("code",{pre:!0},[this._v("mask")]),this._v(" 属性.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("对于对话框需要和用户进行交互的, 不需要指定 "),s("code",{pre:!0},[this._v("type")]),this._v(" 值.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"shu-xing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing","aria-hidden":"true"}},[this._v("¶")]),this._v(" 属性")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mask")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示遮罩")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("classes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用于 Dialog 的类名")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Dialog 的标题")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'请确认'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("success/failure")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("duration")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自动关闭的时间")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1500")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("message")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息体")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cancelBtnText")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取消按钮的文本")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'取消'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("confirmBtnText")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("确认按钮的文本")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'确认'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("isSingle")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示取消按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onCancel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击取消按钮时的回调")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onConfirm")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击确认按钮时的回调")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])}]},n=a(25)(l,e,!1,null,null,null);s.default=n.exports}});
//# sourceMappingURL=3.2d69444c.js.map