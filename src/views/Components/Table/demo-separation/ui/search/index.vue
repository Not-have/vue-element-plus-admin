<script lang="ts" setup>
import { FormSchema } from '@/components/Form'
import { Search } from '@/components/Search'
import { useSearch, useDispatchSearch } from '../../model'
const schema: FormSchema[] = [
  {
    field: 'keyword',
    component: 'Input',
    colProps: {
      span: 24
    }
  }
]

const dispatchSearch = useDispatchSearch()
const search = useSearch()
console.log(search)

const setSearchParams = (_params: any) => {
  dispatchSearch(_params)
}
</script>
<template>
  <Search :schema="schema" @search="setSearchParams" @reset="setSearchParams" />
</template>

<style scoped></style>
