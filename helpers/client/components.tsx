import { FC } from 'react'

export function configureComponent<T>(Component: Function, customProps?: T) {
  const CustomComponent: FC<T> = (props) => {
    return <Component {...props} {...customProps} />
  }

  return CustomComponent
}
