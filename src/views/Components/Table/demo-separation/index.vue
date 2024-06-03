<script lang="ts" setup>
import { unref, reactive } from 'vue'
import { getTableListApi } from '@/api/table'
import { useTable } from '@/hooks/web/useTable'

import { createContext } from './model'
import Main from './main/index.vue'

const { tableState, tableMethods } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getTableListApi({
      pageIndex: unref(currentPage),
      pageSize: unref(pageSize)
    })
    return {
      list: res.data.list,
      total: res.data.total
    }
  }
})

const search = reactive({
  keyword: ''
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
