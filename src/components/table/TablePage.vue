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
import getApi from '@/api/apiList';
import http from '@/utils/http';
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
    const list = reactive([])
    const pager = reactive({
      currentPage: attrs.currentPage || 1,
      total: attrs.total || 0,
      pageSize: attrs.pageSize || 10
    })
    const doRequest = () => {
      isLoading.value = true
      handleRequest({}).then(res => {

      }).catch(_ => {

      }).then(_ => {
        isLoading.value = false
      })
    }
    const handleRequest = (data) => {
      return http({
        url: getApi(props.reqUrl),
        method: props.reqMethod,
        params: data
      })
    }
    doRequest()
    onMounted(() => {
      Object.keys(attrs).forEach(item => {
        console.log('item',item)
      })
    })

    return {
      isLoading,
      list,
      pager,
      doRequest,
      handleRequest
    }
  }
}

</script>

<style lang="less">

</style>