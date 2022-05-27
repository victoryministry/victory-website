import { Icon } from '@iconify/react'
import Link from 'next/link'
import classes from '~/styles/header.module.css'

export default function Header() {
  return (
    <>
      <header id="header" className="alt">
        <h1>
          <Link href="/">Victory Ministry</Link>
        </h1>
        <nav>
          <a href="#menu" className={classes.menuButton}>
            Menu <Icon icon="line-md:menu" />
          </a>
        </nav>
      </header>

      <nav id="menu">
        <div className="inner">
          <h2>Menu</h2>
          <ul className="links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/reflections">Reflections</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
          <a href="#" className="close">
            Close
          </a>
        </div>
      </nav>
    </>
  )
}
