import { inject } from 'vue'
import { IProps } from '../../types'

export default function useContext(): IProps {
  return inject('demo-separation')!
}
