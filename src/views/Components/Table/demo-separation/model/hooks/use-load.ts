import useDispatchTable from './_use-dispatch-table'
export default function useLoad(): () => Promise<void> {
  const { getList } = useDispatchTable()

  return getList
}
