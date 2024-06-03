import { IModelContext } from '../types'
import { useContext } from '../context'

export default function useModelContext(): IModelContext {
  return useContext()! // 确保获取的不为 空
}
