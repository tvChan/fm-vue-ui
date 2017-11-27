webpackJsonp([1],{233:function(s,t,e){s.exports=e(239)},239:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("h2",{attrs:{id:"an-zhuang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-zhuang","aria-hidden":"true"}},[s._v("¶")]),s._v(" 安装")]),s._v(" "),e("h3",{attrs:{id:"npm-an-zhuang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-an-zhuang","aria-hidden":"true"}},[s._v("¶")]),s._v(" npm 安装")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[s._v("npm i @fmfe/fm-vue-ui -S\n")])]),s._v(" "),e("h3",{attrs:{id:"yin-ru-fmui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yin-ru-fmui","aria-hidden":"true"}},[s._v("¶")]),s._v(" 引入 FMUI")]),s._v(" "),e("p",[s._v("可以引入整个 FMUI，或是根据需要仅引入部分组件。")]),s._v(" "),e("h4",{attrs:{id:"wan-zheng-yin-ru"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wan-zheng-yin-ru","aria-hidden":"true"}},[s._v("¶")]),s._v(" 完整引入")]),s._v(" "),e("p",[s._v("在 "),e("code",{pre:!0},[s._v("main.js")]),s._v(" 中写入以下内容：")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-html"}},[s._v("import Vue from 'vue'\nimport FMUI from '@fmfe/fm-vue-ui'\nimport App from './App.vue'\n\nVue.use(FMUI)\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n})\n")])]),s._v(" "),e("h4",{attrs:{id:"an-xu-yin-ru"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-ru","aria-hidden":"true"}},[s._v("¶")]),s._v(" 按需引入")]),s._v(" "),e("p",[s._v("借助 "),e("a",{attrs:{href:"https://github.com/QingWei-Li/babel-plugin-component"}},[s._v("babel-plugin-component")]),s._v("，我们可以只引入需要的组件，以达到减小项目体积的目的。")]),s._v(" "),e("p",[s._v("首先，安装 "),e("code",{pre:!0},[s._v("babel-plugin-component")]),s._v("：")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":""}},[s._v("npm install babel-plugin-component -D\n")])]),s._v(" "),e("p",[s._v("然后，将 "),e("code",{pre:!0},[s._v(".babelrc")]),s._v(" 修改为：")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-js"}},[e("span",{attrs:{class:"hljs-string"}},[s._v('"presets"')]),s._v(": [\n    [\n      "),e("span",{attrs:{class:"hljs-string"}},[s._v('"env"')]),s._v(", {\n        "),e("span",{attrs:{class:"hljs-string"}},[s._v('"targets"')]),s._v(": {\n          "),e("span",{attrs:{class:"hljs-string"}},[s._v('"browsers"')]),s._v(": ["),e("span",{attrs:{class:"hljs-string"}},[s._v('"last 5 versions"')]),s._v(", "),e("span",{attrs:{class:"hljs-string"}},[s._v('"safari > 8"')]),s._v("]\n        },\n        "),e("span",{attrs:{class:"hljs-string"}},[s._v('"modules"')]),s._v(": "),e("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),e("span",{attrs:{class:"hljs-string"}},[s._v('"useBuiltIns"')]),s._v(": "),e("span",{attrs:{class:"hljs-string"}},[s._v('"entry"')]),s._v(",\n        "),e("span",{attrs:{class:"hljs-string"}},[s._v('"loose"')]),s._v(": "),e("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      }\n    ],\n    "),e("span",{attrs:{class:"hljs-string"}},[s._v('"stage-2"')]),s._v("\n  ],\n  "),e("span",{attrs:{class:"hljs-string"}},[s._v('"plugins"')]),s._v(": [["),e("span",{attrs:{class:"hljs-string"}},[s._v('"component"')]),s._v(", [\n    {\n      "),e("span",{attrs:{class:"hljs-string"}},[s._v('"libraryName"')]),s._v(": "),e("span",{attrs:{class:"hljs-string"}},[s._v('"fm-vue-ui"')]),s._v("\n    }\n  ]]]\n")])]),s._v(" "),e("p",[s._v("接下来，如果你只希望引入部分组件，比如 "),e("code",{pre:!0},[s._v("Button")]),s._v("，那么需要在 "),e("code",{pre:!0},[s._v("main.js")]),s._v(" 中写入以下内容：")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-html"}},[s._v("import Vue from 'vue'\nimport { Button } from '@fmfe/fm-vue-ui'\nimport App from './App.vue'\n\nVue.component(Button.name, Button)\n/* 或写为\n * Vue.use(Button)\n */\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n})\n")])]),s._v(" "),e("p",[s._v("组件列表以 "),e("a",{attrs:{href:"https://github.com/fmfe/fm-vue-ui/blob/master/components.json"}},[s._v("components.json")]),s._v(" 中列出的为准。")]),s._v(" "),e("h3",{attrs:{id:"ui-ceng-ji-gui-fan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ui-ceng-ji-gui-fan","aria-hidden":"true"}},[s._v("¶")]),s._v(" UI 层级规范")]),s._v(" "),e("ol",[e("li",[s._v("常规元素的 "),e("code",{pre:!0},[s._v("z-index")]),s._v(" 的范围是 [0, 100]")]),s._v(" "),e("li",[s._v("顶部导航、侧边导航等元素的 "),e("code",{pre:!0},[s._v("z-index")]),s._v(" 的范围是 (100, 1000]")]),s._v(" "),e("li",[s._v("遮罩层的 "),e("code",{pre:!0},[s._v("z-index")]),s._v(" 的范围是 (1000, 10000]")]),s._v(" "),e("li",[s._v("弹框、弹层以及toast等元素的 "),e("code",{pre:!0},[s._v("z-index")]),s._v(" 的范围是 (10000, 100000]")])]),s._v(" "),e("h2",{attrs:{id:"gong-xian-zhi-nan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gong-xian-zhi-nan","aria-hidden":"true"}},[s._v("¶")]),s._v(" 贡献指南")]),s._v(" "),e("ol",[e("li",[s._v("可以在 "),e("a",{attrs:{href:"https://github.com/fmfe/fm-vue-ui/issues"}},[s._v("fm-vue-ui")]),s._v(" 以 issue 的形式说明你的需求")]),s._v(" "),e("li",[s._v("可以在 "),e("a",{attrs:{href:"https://github.com/fmfe/fm-vue-ui"}},[s._v("fm-vue-ui")]),s._v(" 上新建自己的组件或功能分支，提交代码，补充相关文档和测试用例，通知主负责人 进行 review，然后合并到 "),e("code",{pre:!0},[s._v("master")]),s._v(" 或者 "),e("code",{pre:!0},[s._v("dev")]),s._v("。合并之后，将删除新建的分支")]),s._v(" "),e("li",[s._v("代码规范请参考 "),e("a",{attrs:{href:"https://github.com/fmfe/fe-coding-style-guide/"}},[s._v("coding style")])]),s._v(" "),e("li",[s._v("对于组件中涉及的图标，请优先使用 CSS 来实现; 如果实现不了, 请将对应的图片资源放在 CDN 上")])])])}]},a=e(25)(null,n,!1,null,null,null);t.default=a.exports}});
//# sourceMappingURL=1.8633996a.js.map