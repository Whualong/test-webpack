/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-08-09 14:03:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-11 14:06:49
 * @FilePath: /test-webpack/build/webpack.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
const path = require('path')
const { VueLoaderPlugin } = require( 'vue-loader' );
const HtmlPlugin = require( 'html-webpack-plugin' );
function genUrl(p='./'){
    return path.resolve(__dirname,p)
}
module.exports = {
    mode : 'development',
    entry : genUrl('./src/wt.js'),
    output : {
        filename : '[name].bundle.js',
        path : './wtDist'
    },
}