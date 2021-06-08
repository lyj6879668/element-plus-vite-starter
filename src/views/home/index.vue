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
          <el-button type="primary" @click="showConfirm">default</el-button>
        </div>
      </template>
    </table-page>

  </div>
</template>

<script>
import {getCurrentInstance} from "vue";
import {removeToken} from "@/utils/storage/cookie";
import {storageSession} from "@/utils/storage";
import {useRouter} from 'vue-router'
import TablePage from '@/components/table/TablePage.vue'
import {ElMessage} from "element-plus";
export default {
  components: {
    TablePage
  },
  setup() {
    console.log('getCurrentInstance',getCurrentInstance())
    const {ctx} = getCurrentInstance()
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
    const showConfirm = () => {
      ctx.$confirm('是傻逼吗',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        callback: action => {
          ctx.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      })
    }
    return {
      router,
      logout,
      handleChange,
      handleTableChange,
      toList,
      showConfirm
    }
  }
}

</script>

<style lang="less">

</style>