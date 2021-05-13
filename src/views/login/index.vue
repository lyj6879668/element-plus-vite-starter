<template>
  <div>
	  <el-button @click="toHome">login</el-button>
  </div>
</template>

<script setup>
  import axios from 'axios'
  import {useRouter} from 'vue-router'
  const router = useRouter()
  const toHome = () => {
    console.log(123);
    axios.get('http://localhost:3001/api/login',{
      username: 'admin',
      password: '123456'
    }).then(res => {
      console.log(res);
    })
  }
</script>

<style lang="less">

</style>