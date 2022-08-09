/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-08-09 15:55:02
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-08-09 16:02:58
 * @FilePath: /test-webpack/src/router/base.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
export const Login = {
    path : '/login',
    name : 'Login',
    component : () => import('pages/Login.vue')
}