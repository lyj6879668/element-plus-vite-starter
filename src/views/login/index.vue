<template>
  <div>
	  <el-button @click="toHome">login</el-button>
  </div>
</template>

<script setup>
  import {useRouter} from 'vue-router'
  const router = useRouter()
  const toHome = () => {
    console.log(123);
    router.push({
      name: 'home'
    })
  }
</script>

<style lang="less">

</style>