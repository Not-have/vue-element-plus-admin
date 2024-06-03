import useModelContext from './_use-model-context'

export default function useDispatchTable(): ModelDispatch {
  return useModelContext().dispatch
}
