<script lang="tsx" setup>
import { defineProps, PropType } from 'vue'

import { useI18n } from '@/hooks/web/useI18n'
import { BaseButton } from '@/components/Button'
import { TableData } from '@/api/table/types'

import { useLoad } from '../../model'
import { opSave } from '../../op'

const { t } = useI18n()

const props = defineProps({
  row: {
    type: Object as PropType<Nullable<TableData>>
  }
})

const load = useLoad()

const handleClick = () => {
  opSave(props?.row || null).then(() => {
    load()
  })
}
</script>
<template>
  <BaseButton type="primary" @click="handleClick">{{ t('exampleDemo.edit') }}</BaseButton>
</template>

<style scoped></style>
