<template>
  <div class="list">
      <list-comp v-for="(item,index) in list" :key="item.id" :item="item" @click="changeName(index)"></list-comp>
  </div>
</template>

<script>
import {reactive,onMounted} from 'vue'
import listComp from './listComp.vue'
export default {
  components: {
    listComp
  },
  setup() {
    const list = reactive([])
    const getList = () => {
      for(let i = 0;i< 50;i++) {
        list.push({
          id: new Date().getTime() + '-' + i,
          name: Math.random() + 1
        })
      }
    }
    getList()
    /**
     * 改变对应list的name
     * @param index
     */
    const changeName = (index) => {
      list[index].name = 'this is new name'
    }
    onMounted(() => {
    })
    return {
      list,
      getList,
      changeName
    }
  }
}
</script>

<style lang="less">
.list {
  margin: 0 auto;
  width: 500px;
  height: 300px;
  border: 1px solid gray;
  overflow: scroll;
}
</style>