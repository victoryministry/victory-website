import clsx, { ClassValue } from 'clsx'
import { PropsWithChildren } from 'react'

export type WrapperProps = PropsWithChildren<{
  className?: ClassValue[]
}>

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <section id="wrapper" className={clsx(className)}>
      {children}
    </section>
  )
}
