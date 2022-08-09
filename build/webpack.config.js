/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-08-09 14:03:02
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-08-09 17:20:40
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
    entry : genUrl('../src/main.js'),
    output : {
        filename : '[name].bundle.js'
    },
    resolve : {
        alias : {
            pages : genUrl('../src/pages'),
            components : genUrl('../src/components'),
            router : genUrl('../src/router'),
            util : genUrl('../src/util'),
        }
    },
    module : {
        rules : [
            {
                test : /\.vue$/,
                use : [
                    'vue-loader'
                ]
            }
        ]
    },
    plugins : [
        new VueLoaderPlugin(),
        new HtmlPlugin( {
            meta : {
                viewport : 'width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1.0, shrink-to-fit=no, viewport-fit=cover',
                charset : 'utf-8'
            },
            templateContent : `
                <!DOCTYPE html>
                <html>
                    <head>
                        <title></title>
                        <style>html { scroll-behavior : smooth }</style>
                    </head>
                    <body>
                        <div id="app"></div>
                    </body>
                </html>
            `
        } ),
    ],
    devServer:{
        port : 3000
    }
}