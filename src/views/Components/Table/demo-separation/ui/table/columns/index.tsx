import { useI18n } from '@/hooks/web/useI18n'
import { TableColumn } from '@/components/Table'
import { BaseButton } from '@/components/Button'

const { t } = useI18n()
const columns: TableColumn[] = [
  {
    field: 'selection',
    type: 'selection'
  },
  {
    field: 'index',
    label: t('tableDemo.index'),
    type: 'index'
  },
  {
    field: 'title',
    label: t('tableDemo.title')
  },
  {
    field: 'author',
    label: t('tableDemo.author')
  },
  {
    field: 'display_time',
    label: t('tableDemo.displayTime')
  },
  {
    field: 'pageviews',
    label: t('tableDemo.pageviews')
  },
  {
    field: 'action',
    width: '260px',
    label: t('tableDemo.action'),
    slots: {
      default: () => {
        return (
          <>
            <BaseButton type="primary">{t('exampleDemo.edit')}</BaseButton>
            <BaseButton type="success">{t('exampleDemo.detail')}</BaseButton>
            <BaseButton type="danger">{t('exampleDemo.del')}</BaseButton>
          </>
        )
      }
    }
  }
]

export default columns
