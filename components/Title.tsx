export type TitleProps = {
  title: string
  subtitle?: string
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <header>
      <div className="inner">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </header>
  )
}
