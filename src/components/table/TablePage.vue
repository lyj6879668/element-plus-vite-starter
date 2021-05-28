<template>
  <div v-loading="isLoading">
    <slot name="header"></slot>
    <slot></slot>
    <search-form>
      <slot name="searchForm"></slot>
    </search-form>
    <common-table></common-table>
  </div>
</template>

<script>
import {ref,reactive,onMounted} from 'vue';
import SearchForm from './SearchForm.vue';
import CommonTable from './Table.vue'
import getApi from '@/api/apiList'
export default {
  components: {
    SearchForm,
    CommonTable
  },
  props: {
    /**
     * 请求地址
     */
    reqUrl: {
      type: String
    },
    /**
     * 请求方法
     */
    reqMethod: {
      type: String,
      default: 'post'
    },
    /**
     * form表单
     */
    formAttrs: {
      type: Object,
      default: () => {}
    },
    /**
     * 表格字段
     */
    columns: {
      type: Array,
      default: () => []
    },
    /**
     * 是否显示分页栏
     */
    showPagination: {
      type: Boolean,
      default: true
    },
    /**
     * 分页组件布局
     */
    layout: {
      type: String,
      default: 'prev,pager,next,->,total'
    },
  },
  setup(props, {attrs, slots, emit}) {
    console.log(attrs)
    const isLoading = ref(false)
    const list = ref([])
    const pager = reactive({
      currentPage: attrs.currentPage || 1,
      total: attrs.total || 0,
      pageSize: attrs.pageSize || 10
    })
    const doRequest = () => {

    }
    onMounted(() => {
      Object.keys(attrs).forEach(item => {
        console.log(item)
      })
    })
    return {
      isLoading,
      list,
      pager,
      doRequest
    }
  }
}

</script>

<style lang="less">

</style>