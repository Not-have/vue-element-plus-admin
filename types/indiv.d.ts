import { Ref, ref } from 'vue'
import { ElTable } from 'element-plus'
import { TableProps, TableSetProps, TableColumn } from '@/components/Table'

// ElTable实例
const elTableRef = ref<ComponentRef<typeof ElTable>>()

declare global {
  interface ModelDispatch {
    getList: (args?: any) => Promise<void>
    setProps?: (props?: TableProps) => Promise<void>
    setColumn?: (columnProps: TableSetProps[]) => Promise<void>
    addColumn?: (tableColumn: TableColumn, index?: number) => Promise<void>
    delColumn?: (field: string) => Promise<void>
    getElTableExpose?: () => Promise<typeof elTableRef>
    refresh?: () => void
    delList?: (idsLength: number) => Promise<void>
  }

  interface ModelValue {
    currentPage: Ref<number>
    pageSize: Ref<number>
    total: Ref<number>
    dataList: Ref<any[]>
    loading: Ref<boolean>
  }
}
