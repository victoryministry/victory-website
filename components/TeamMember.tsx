export type TeamMemberProps = {
  name: string
  imageUrl: string
}

export default function TeamMember({ name, imageUrl }: TeamMemberProps) {
  return (
    <article>
      <img className="image fit" src={imageUrl} alt={name} />
      <h3 className="major">{name}</h3>
    </article>
  )
}
