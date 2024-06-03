<script lang="ts" setup>
import { Table } from '@/components/Table'

import { useTable } from '../../model'
import columns from './columns'

const { loading, dataList, total, currentPage, pageSize } = useTable()
</script>
<template>
  <Table
    v-model:pageSize="pageSize"
    v-model:currentPage="currentPage"
    :columns="columns"
    :data="dataList"
    :loading="loading"
    :pagination="{
      total: total
    }"
  />
</template>

<style scoped></style>
