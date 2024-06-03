import { inject } from 'vue'
import { IModelContext } from '../types'

export default function useContext(): IModelContext {
  return inject('demo-separation')!
}
