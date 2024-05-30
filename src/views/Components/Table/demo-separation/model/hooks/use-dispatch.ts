import { IModelDispatch } from '../../types'
import useModelContext from './_use-model-context'

export default function useDispatch(): IModelDispatch {
  return useModelContext().dispatch
}
