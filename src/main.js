/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-06-22 10:17:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-10 14:08:39
 * @FilePath: /test-webpack/src/main.js
 * @Description:
 *
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved.
 */
import { createApp } from 'vue'
import router from './router';
import App from './App.vue';
import add from 'common/js/add.js'
console.log(add(3,6))
import('common/js/square.js').then((square)=>{
    console.log(square.square(5,7))
})
const app = createApp(App)
app.use(router)
app.mount('#app')
