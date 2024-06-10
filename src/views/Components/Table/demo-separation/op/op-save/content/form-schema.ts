import { reactive } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { FormSchema } from '@/components/Form'

const { t } = useI18n()
const formSchema = reactive<FormSchema[]>([
  {
    field: 'title',
    label: t('tableDemo.title'),
    component: 'Input',
    colProps: {
      span: 24
    }
  },
  {
    field: 'author',
    label: t('tableDemo.author'),
    component: 'Input'
  },
  {
    field: 'display_time',
    label: t('tableDemo.displayTime'),
    component: 'DatePicker',
    componentProps: {
      type: 'datetime',
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    }
  },
  {
    field: 'importance',
    label: t('tableDemo.importance'),
    component: 'Select',
    componentProps: {
      style: {
        width: '100%'
      },
      options: [
        {
          label: '重要',
          value: 3
        },
        {
          label: '良好',
          value: 2
        },
        {
          label: '一般',
          value: 1
        }
      ]
    }
  },
  {
    field: 'pageviews',
    label: t('tableDemo.pageviews'),
    component: 'InputNumber',
    value: 0
  },
  {
    field: 'content',
    label: t('exampleDemo.content'),
    component: 'Editor',
    colProps: {
      span: 24
    }
  }
])

export default formSchema
