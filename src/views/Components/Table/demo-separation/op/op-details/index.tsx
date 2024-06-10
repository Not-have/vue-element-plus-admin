import { opDialog, DialogType } from 'micro-element-plus-extra'

import Content from './content/index.vue'

export default function opDetails() {
  return opDialog({
    content: <Content />,
    type: DialogType.LEFT,
    title: '详情'
  })
}
