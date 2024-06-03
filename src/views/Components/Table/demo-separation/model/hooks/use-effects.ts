import { watch } from 'vue'
import useDispatchTable from './_use-dispatch-table'

import useSearch from './use-search'

export default function useEffects(): void {
  const { getList } = useDispatchTable()
  const search = useSearch()

  watch(
    search,
    () => {
      getList()
    },
    {
      deep: true
    }
  )
}
