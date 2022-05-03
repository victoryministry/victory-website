import {
  Anchor,
  AnchorProps,
  Image,
  Text,
  TextProps,
  Title,
  TitleProps
} from '@mantine/core'
import { NextLink } from '@mantine/next'
import { HtmrOptions } from 'htmr'
import Link from 'next/link'
import { configureComponent } from './components'

export const htmrOptions: HtmrOptions = {
  transform: {
    image: Image as any,
    a: Anchor,
    h1: configureComponent<TitleProps>(Title, { order: 1 }),
    h2: configureComponent<TitleProps>(Title, { order: 2 }),
    h3: configureComponent<TitleProps>(Title, { order: 3 }),
    h4: configureComponent<TitleProps>(Title, { order: 4 }),
    h5: configureComponent<TitleProps>(Title, { order: 5 }),
    h6: configureComponent<TitleProps>(Title, { order: 6 }),
    p: Text
  }
}
