import useModelContext from './_use-model-context'
export default function useKeyword(): string {
  return useModelContext().search.keyword || ''
}
