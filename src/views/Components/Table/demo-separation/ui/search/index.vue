<script lang="tsx" setup>
import { opDialog, DialogType } from 'micro-element-plus-extra'
import { BaseButton } from '@/components/Button'
import { useIcon } from '@/hooks/web/useIcon'
import { FormSchema } from '@/components/Form'
import { Search } from '@/components/Search'
import { Footer } from '../../components'
import { useSearch, useDispatchSearch } from '../../model'

const search = useSearch()

const schema: FormSchema[] = [
  {
    field: 'keyword',
    label: '概念剪子',
    component: 'Input',
    colProps: {
      span: 24
    },
    value: search.keyword
  },
  {
    field: 'keyword',
    label: '概念剪子',
    component: 'Input',
    colProps: {
      span: 24
    },
    value: search.keyword
  },
  {
    field: 'keyword',
    label: '概念剪子',
    component: 'Input',
    colProps: {
      span: 24
    },
    value: search.keyword
  }
]

const dispatchSearch = useDispatchSearch()

const setSearchParams = (_params: any) => {
  dispatchSearch(_params)
}

const searchIcon = useIcon({ icon: 'vi-carbon:search' })

const handleSearchClick = () => {
  opDialog({
    content: <Search schema={schema} onSearch={setSearchParams} onReset={setSearchParams} />,
    title: <span>搜索</span>,
    type: DialogType.LEFT,
    disabled: false,
    footer: <Footer />
  })
}
</script>
<template>
  <!-- <Search :schema="schema" @search="setSearchParams" @reset="setSearchParams" /> -->

  <div class="mb-10px">
    <BaseButton :icon="searchIcon" @click="handleSearchClick" />
  </div>
</template>

<style scoped></style>
