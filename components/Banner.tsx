import logoImage from '~/assets/logo.webp'

export default function Banner() {
  return (
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <img className="icon" src={logoImage.src} alt="victory logo" />
        </div>
        <h2>Victory Ministry</h2>
        <p>Ini Subtitle nya engga tau diisi apaan</p>
      </div>
    </section>
  )
}
