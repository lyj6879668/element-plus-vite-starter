<template>
  <div>
    <el-button @click="toHome">login</el-button>
  </div>
</template>

<script setup>
import {login,getUserInfo} from '@/api/user'
import {setToken} from "@/utils/storage/cookie";
import {storageSession} from "@/utils/storage";
import {useRouter} from 'vue-router'

const router = useRouter()
const toHome = () => {
  login({
    username: 'admin',
    password: '123456'
  }).then(res => {
    console.log('res', res);
    setToken(res.data.token);
    getUserInfo().then(info => {
      storageSession.setItem('userinfo',info.data.userInfo)
      router.push({
        name: 'home'
      })
    })

  })
}
</script>

<style lang="less">

</style>