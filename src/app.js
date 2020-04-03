const Vue = require('vue');
Vue.config.productionTip = false

import axios from 'axios'
//axios.defaults.baseURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

import HolaMundo from './components/HolaMundo';
Vue.component('hola-mundo',HolaMundo);


var vm = new Vue({
    el: '#app',
    data: {},
    created() {},
    methods: {},
});

