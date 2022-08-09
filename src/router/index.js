/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-08-09 15:48:29
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-08-09 17:27:59
 * @FilePath: /test-webpack/src/router/index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
import { createRouter ,createWebHistory,createWebHashHistory } from 'vue-router';
import * as BaseRouter from './base'
import { extendRouter } from '../util';
const router = createRouter({
    history : createWebHashHistory(),
    routes : [
        {
            path : '/',
            redirect : '/login'
        },
        ...extendRouter( BaseRouter )
    ]
})
export default router