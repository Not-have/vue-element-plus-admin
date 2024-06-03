<script lang="ts" setup>
import { unref, reactive } from 'vue'
import { getTableListApi } from '@/api/table'
import { useTable } from '@/hooks/web/useTable'

import { createContext } from './model'
import Main from './main/index.vue'

// 在这设置默认值之后，无法清空，很傻逼
const search = reactive({
  keyword: ''
})

const { tableState, tableMethods } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getTableListApi({
      pageIndex: unref(currentPage),
      pageSize: unref(pageSize),
      title: search.keyword
    })
    return {
      list: res.data.list,
      total: res.data.total
    }
  }
})

createContext({
  search: search,
  value: tableState,
  dispatch: tableMethods
})
</script>
<template>
  <Main />
</template>

<style scoped></style>
