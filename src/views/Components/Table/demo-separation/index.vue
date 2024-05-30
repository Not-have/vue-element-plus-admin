<script lang="ts" setup>
import { unref } from 'vue'
import { getTableListApi } from '@/api/table'
import { useTable } from '@/hooks/web/useTable'
import { createContext } from './model'
import { Search, Table } from './ui'

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

createContext({
  search: {
    keyword: ''
  },
  value: tableState,
  dispatch: tableMethods
})
</script>
<template>
  <Search />
  <Table />
</template>

<style scoped></style>
