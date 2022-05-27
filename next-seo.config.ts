import { DefaultSeoProps } from 'next-seo'

const defaultSEO: DefaultSeoProps = {
  canonical: 'https://victory-ministry.netlify.app/',
  defaultTitle: 'Victory Ministry Bogor',
  titleTemplate: '%s | Victory Ministry Bogor',
  description:
    'Victory Ministry Bogor is a ministry that is dedicated to the spiritual growth of the people of Bogor.',
  openGraph: {
    url: 'https://victory-ministry.netlify.app/',
    type: 'website',
    title: 'Victory Ministry Bogor',
    description:
      'Victory Ministry Bogor is a ministry that is dedicated to the spiritual growth of the people of Bogor.'
  },
  twitter: {
    cardType: 'summary',
    site: 'https://victory-ministry.netlify.app/'
  }
}

export default defaultSEO
