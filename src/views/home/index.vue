<template>
  <div>
	HOME
    <el-button type="primary" @click="logout">logout</el-button>
    <table-page @change="handleChange" @table-change="handleTableChange">
      <template v-slot:header>
        <div>
          <el-button type="primary" size="mini" @click="toList">header</el-button>
        </div>
      </template>
      <template v-slot>
        <div>
          <el-button type="primary">default</el-button>
        </div>
      </template>
    </table-page>

  </div>
</template>

<script>
import {removeToken} from "@/utils/storage/cookie";
import {storageSession} from "@/utils/storage";
import {useRouter} from 'vue-router'
import TablePage from '@/components/table/TablePage.vue'
export default {
  components: {
    TablePage
  },
  setup() {
    const router = useRouter()
    /**
     * 登出接口
     */
    const logout = () => {
      removeToken();
      storageSession.clear()
      router.push({
        name: 'login'
      })
    }
    // table操作
    const handleChange = () => {

    }
    const handleTableChange = () => {

    }
    const toList = () => {
      router.push({
        name: 'list'
      })
    }
    return {
      router,
      logout,
      handleChange,
      handleTableChange,
      toList
    }
  }
}

</script>

<style lang="less">

</style>