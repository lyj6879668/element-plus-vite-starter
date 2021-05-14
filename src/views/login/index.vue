<template>
  <div>
	  <el-button @click="toHome">login</el-button>
  </div>
</template>

<script setup>
  import {login} from '@/api/user'
  import {useRouter} from 'vue-router'
  const router = useRouter()
  const toHome = () => {
    // axios.get('http://localhost:3001/api/login',{
    //   username: 'admin',
    //   password: '123456'
    // }).then(res => {
    //   console.log(res);
    // })
    login({
      username: 'admin',
      password: '123456'
    }).then(res => {
      console.log('res',res);
    })
  }
</script>

<style lang="less">

</style>