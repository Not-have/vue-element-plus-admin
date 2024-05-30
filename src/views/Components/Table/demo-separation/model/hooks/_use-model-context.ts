import { IProps } from '../../types'
import { useContext } from '../context'

export default function useModelContext(): IProps {
  return useContext()! // 确保获取的不为 空
}
