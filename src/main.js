/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-06-22 10:17:06
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-08-09 17:23:25
 * @FilePath: /test-webpack/src/main.js
 * @Description:
 *
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved.
 */
import { createApp } from 'vue'
import router from './router';
import App from './App.vue';
const app = createApp(App)
app.use(router)
app.mount('#app')
