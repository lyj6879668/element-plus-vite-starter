<template>
  <div class="app-wrapper">
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import AppMain from "./components/AppMain.vue";
export default {
  components: {
    AppMain
  },
  setup(props, context) {

  }
}
</script>

<style lang="less">

</style>