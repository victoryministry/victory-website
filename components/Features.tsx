import { PropsWithChildren } from 'react'

export default function Features({ children }: PropsWithChildren<{}>) {
  return <section className="features">{children}</section>
}
