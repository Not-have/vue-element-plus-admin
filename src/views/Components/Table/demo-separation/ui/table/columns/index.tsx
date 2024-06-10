import { useI18n } from '@/hooks/web/useI18n'
import { TableColumn } from '@/components/Table'
import Ops from '../../ops/index.vue'

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
      default: ({ row }) => {
        return <Ops row={row} />
      }
    }
  }
]

export default columns
