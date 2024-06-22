import { opDialog } from 'micro-element-plus-extra'
import { useI18n } from '@/hooks/web/useI18n'
import { TableData } from '@/api/table/types'

import { submit } from './utils'
import Content from './content/index.vue'
const { t } = useI18n()
export default function opSave(row: TableData | null): Promise<void> {
  return opDialog({
    content: <Content currentRow={row} />,
    title: row ? t('exampleDemo.edit') : t('exampleDemo.add'),
    submit: submit,
    disabled: false
  })
}
