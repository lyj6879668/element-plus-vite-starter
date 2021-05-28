<template>
  <section class="app-main">
    <router-view :key="key" v-slot="{ Component }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
export default {
  name: 'AppMain',
  setup() {
    const route = useRoute()
    const key = computed(() => route.path)
    return {key}
  }
}
</script>

<style scoped lang="less">
.app-main {
  min-height: calc(100vh - 70px);
  width: 100%;
  height: 90vh;
  position: relative;
  overflow-x: hidden;
}
</style>