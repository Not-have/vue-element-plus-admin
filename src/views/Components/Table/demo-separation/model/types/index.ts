export interface IPropsSearch {
  keyword: string
}

export interface IProps<T> {
  search: T

  value: ModelValue

  dispatch: ModelDispatch
}

export interface IModelContext extends IProps<IPropsSearch> {}
