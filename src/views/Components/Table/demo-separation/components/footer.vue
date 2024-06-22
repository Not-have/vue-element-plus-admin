<script lang="tsx" setup>
import { BaseButton } from '@/components/Button'
import { useFields } from 'micro-element-plus-extra'

const { closable } = useFields()
const handleCancelClick = () => {
  closable()
}
</script>

<template>
  <BaseButton>重置</BaseButton>
  <BaseButton>确认</BaseButton>
  <BaseButton @click="handleCancelClick">取消</BaseButton>
</template>
