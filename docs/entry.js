import 'normalize.css';
import 'highlight.js/styles/color-brewer.css';
import 'github-markdown-css';

import './common.less';

import 'babel-polyfill';

import Vue from 'vue';
import VueRouter from 'vue-router';

import FMUI from 'main/index';
import locale from 'main/locale/i18n';
import fmutils from 'main/utils/index';
import 'fm-vue-ui/theme-default/src/index.less';

import routes from './routes.config';
import entry from './entry.vue';
import DocsHeader from './components/header.vue';
import DocsSideNav from './components/side-nav.vue';
import DocsDemoBlock from './components/demo-block.vue';

import i18n from './i18n/index';
locale.setI18n(i18n);
Vue.prototype.$utils = fmutils;

Vue.use(FMUI);
Vue.use(VueRouter);
Vue.component('docs-demo-block', DocsDemoBlock);
Vue.component('docs-header', DocsHeader);
Vue.component('docs-side-nav', DocsSideNav);

const router = new VueRouter({
    mode: 'history',
    base: '/fm-vue-ui/',
    fallback: true,
    routes
});

new Vue({
    render: h => h(entry),
    router,
    i18n
}).$mount('#app');
