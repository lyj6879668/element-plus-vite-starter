<template>
  <router-view></router-view>
  <x-plugin></x-plugin>
</template>

<script>
import XPlugin from '@/components/lib/plugin/Index.vue';
export default {
  components: {XPlugin}
}
</script>