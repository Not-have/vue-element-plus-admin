import { IModelValue } from '../../types'
import useModelContext from './_use-model-context'
export default function useTableState(): IModelValue {
  return useModelContext().value
}
