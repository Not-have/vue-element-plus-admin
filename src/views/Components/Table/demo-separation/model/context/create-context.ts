import { provide } from 'vue'

export default function createContext(value): void {
  provide('demo-separation', value)
}
