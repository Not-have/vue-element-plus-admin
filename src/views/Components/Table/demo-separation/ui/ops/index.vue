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

<style>
.el-dialog__footer {
  margin-top: 0;
}

.el-dialog__body {
  height: 100%;
  overflow-y: auto;
}

.el-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  overflow: hidden;
  transform: translateX(-50%) translateY(-50%);
}

.el-dialog__body::-webkit-scrollbar {
  width: 12px; /* 滚动条宽度 */
}

.el-dialog__body::-webkit-scrollbar-track {
  background: #f5f5f5; /* 滚动条轨道背景 */
  border-radius: 6px;
}

.el-dialog__body::-webkit-scrollbar-thumb {
  background-color: #c1c1c1; /* 滚动条滑块颜色 */
  border: 3px solid #f5f5f5; /* 滑块周围的边框颜色 */
  border-radius: 6px;
}

.el-dialog__body::-webkit-scrollbar-thumb:hover {
  background-color: #a8a8a8; /* 滚动条滑块悬停颜色 */
}
</style>
