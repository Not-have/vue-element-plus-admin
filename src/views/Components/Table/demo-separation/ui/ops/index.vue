<script lang="tsx" setup>
import { defineProps, PropType } from 'vue'

import { useI18n } from '@/hooks/web/useI18n'
import { BaseButton } from '@/components/Button'
import { TableData } from '@/api/table/types'

import { opSave } from '../../op'

const { t } = useI18n()

const props = defineProps({
  row: {
    type: Object as PropType<Nullable<TableData>>
  }
})

const handleClick = () => {
  opSave(props?.row || null)
}
</script>
<template>
  <BaseButton type="primary" @click="handleClick">{{ t('exampleDemo.edit') }}</BaseButton>
</template>

<style scoped></style>
