import useModelContext from './_use-model-context'
export default function useTable(): ModelValue {
  return useModelContext().value
}
