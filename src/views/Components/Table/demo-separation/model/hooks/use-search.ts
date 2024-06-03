import { IPropsSearch } from '../types'
import useModelContext from './_use-model-context'

/**
 * 如果愿意的话，可以按照搜索条件，拆分的更加详细，例如
 * useKeyword
 */
export default function useSearch(): IPropsSearch {
  return useModelContext().search
}
