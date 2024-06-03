import { IPropsSearch } from '../types'
import useModelContext from './_use-model-context'

// TODO 优化传入值
export default function useDispatchSearch() {
  const search = useModelContext().search

  return (value: IPropsSearch) => {
    Object.assign(search, value)
  }
}
