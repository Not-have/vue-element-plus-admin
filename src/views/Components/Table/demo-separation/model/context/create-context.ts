import { provide } from 'vue'

export default function createContext<T>(value: T): void {
  provide('demo-separation', value)
}
