<template>
  <div>
    <p>{{item.name}} <span v-if="isChange">{{changeTime}}</span></p>
  </div>
</template>

<script>
import {watch,ref,toRefs,watchEffect,getCurrentInstance} from "vue";
import _ from 'lodash'
export default {
  props: {
    item: {
      type: Object
    }
  },
  setup(props) {
    const {item} = toRefs(props)
    const isChange = ref(false)
    const changeTime = ref('')
    const {ctx} = getCurrentInstance()
    watchEffect(() => {
      // console.log('change',isChange.value)
    })
    watch(() => _.cloneDeep(item),(item,prevItem) => {
      console.log(item.value.name,prevItem.value.name)
      isChange.value = true
      changeTime.value = ctx.$D().format('YYYY-MM-DD HH:mm:ss')
      console.log(changeTime)
    },{deep: true})
    return {
      isChange,
      changeTime
    }
  }
}
</script>

<style lang="less">

</style>