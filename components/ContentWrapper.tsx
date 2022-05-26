import clsx, { ClassValue } from 'clsx'
import { PropsWithChildren } from 'react'

export type ContentWrapperProps = PropsWithChildren<{
  className?: ClassValue[]
}>

export default function ContentWrapper({
  children,
  className
}: ContentWrapperProps) {
  return (
    <div className={clsx('wrapper', className)}>
      <div className="inner">{children}</div>
    </div>
  )
}
