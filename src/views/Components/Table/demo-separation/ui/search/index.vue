<script lang="ts" setup>
import { FormSchema } from '@/components/Form'
import { Search } from '@/components/Search'
import { useTableState, useDispatch } from '../../model'
const schema: FormSchema[] = [
  {
    field: 'title',
    component: 'Input',
    colProps: {
      span: 24
    }
  }
]

const { getList } = useDispatch()
const setSearchParams = (_params: any) => {
  getList(_params)
}
const { dataList } = useTableState()
console.log(dataList, 'tableState')
</script>
<template>
  <Search :schema="schema" @search="setSearchParams" @reset="setSearchParams" />
</template>

<style scoped></style>
