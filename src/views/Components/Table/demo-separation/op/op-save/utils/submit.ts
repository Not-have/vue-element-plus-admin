import { saveTableApi } from '@/api/table'

export default function submit(value: any): Promise<unknown> {
  console.log(value)

  return saveTableApi(value)
}
