<template>
  <div>
    <p @click="emitChange">{{item.name}} <span v-if="isChange">{{changeTime}}</span></p>
  </div>
</template>

<script>
import {watch,ref,toRefs,watchEffect,getCurrentInstance} from "vue";
export default {
  props: {
    item: {
      type: Object
    }
  },
  // emits: ['emitChange'],
  setup(props,{emit}) {
    const {item} = toRefs(props)
    const isChange = ref(false)
    const changeTime = ref('')
    const {proxy} = getCurrentInstance()
    watch(() => item,(item,prevItem) => {
      console.log(item.value,prevItem.value)
      isChange.value = true
      changeTime.value = proxy.$D().format('YYYY-MM-DD HH:mm:ss')
    },{deep: true})
    const emitChange = () => {
      emit('emitChange',item.value.id)
      proxy.emitter('get-emit',true)
    }
    return {
      isChange,
      changeTime,
      emitChange
    }
  }
}
</script>

<style lang="less">

</style>