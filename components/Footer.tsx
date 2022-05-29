import { Icon } from '@iconify/react'
import classes from '~/styles/footer.module.css'

export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <div className={classes.socials}>
          <a href="https://www.instagram.com/victoryministrybogor/">
            <Icon icon="fa-instagram" /> Instagram
          </a>
          <a href="https://www.youtube.com/channel/UCuuzNoA8UDDOkFaBzIJ_JEw">
            <Icon icon="fa-youtube" /> Youtube
          </a>
          <a href="mailto:victoryministrybgr@gmail.com">
            <Icon icon="fa-envelope-o" /> E-Mail
          </a>
        </div>
        <ul className="copyright">
          <li>&copy; Victory Ministry.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
