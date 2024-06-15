import { saveTableApi } from '@/api/table'
import { useForm } from '@/hooks/web/useForm'

export default async function submit(_v, _dv, el, parentRef): Promise<unknown> {
  const { formRegister, formMethods } = useForm()
  const { getFormData, getElFormExpose } = formMethods

  await formRegister(parentRef, el)

  const elForm = await getElFormExpose()

  const valid = await elForm?.validate().catch((err) => {
    console.log(err)
  })

  if (valid) {
    const formData = await getFormData()
    console.log(formData)

    return saveTableApi(formData)
  }
}
