<script lang="ts" setup>
import { defineProps } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { BaseButton } from '@/components/Button'
import { useHandleEdit } from '../../hooks'

const { t } = useI18n()

const props = defineProps({
  row: {
    type: Object, // 应该为正确的类型
    required: true
  }
})

const handleEdit = useHandleEdit()
const handleClick = () => {
  handleEdit(props.row)
}
</script>
<template>
  <BaseButton type="primary" @click="handleClick">{{ t('exampleDemo.edit') }}</BaseButton>
</template>

<style scoped></style>
