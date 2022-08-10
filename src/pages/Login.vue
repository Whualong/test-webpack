<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-08-09 16:01:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-10 14:13:07
 * @FilePath: /test-webpack/src/pages/Login.vue
 * @Description:   
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
-->
<template>
    <div>
        登录
        <img :src="avatarIcon">
    </div>
</template>

<script>
import txt from './test.txt'
import avatarIcon from 'assets/image/touxiang.png'
export default {
    data(){
        return {
            avatarIcon,
            test:123
        }
    },
    created(){
        console.log(txt)
    }
}
</script>

<style>

</style>