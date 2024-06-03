<script lang="ts" setup>
import { defineProps } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { BaseButton } from '@/components/Button'

const { t } = useI18n()

defineProps({
  row: {
    type: Object, // 应该为正确的类型
    required: true
  }
})
</script>
<template>
  <BaseButton type="danger">{{ t('exampleDemo.del') }}</BaseButton>
</template>

<style scoped></style>
