import { NextPage } from 'next'
import Article from '~/components/Article'
import Banner from '~/components/Banner'
import Features from '~/components/Features'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Spotlight from '~/components/Spotlight'
import Wrapper from '~/components/Wrapper'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />

      <Wrapper>
        <Spotlight
          title="Tono Bangun Tenda"
          imageUrl="/images/pic01.jpg"
          linkUrl="/ini-nomor-1"
          style="1">
          <p>
            Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis
            ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris
            id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam
            ultrices, neque et faucibus viverra, ex nulla cursus.
          </p>
        </Spotlight>

        <Spotlight
          title="Tono Bangun 2"
          imageUrl="/images/pic02.jpg"
          linkUrl="/ini-nomor-2"
          style="2"
          alt>
          <p>
            Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis
            ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris
            id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam
            ultrices, neque et faucibus viverra, ex nulla cursus.
          </p>
        </Spotlight>

        <Spotlight
          title="Tono Bangun 3"
          imageUrl="/images/pic03.jpg"
          linkUrl="/ini-nomor-3"
          style="3">
          <p>
            Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis
            ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris
            id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam
            ultrices, neque et faucibus viverra, ex nulla cursus.
          </p>
        </Spotlight>

        <section id="four" className="wrapper alt style1">
          <div className="inner">
            <h2 className="major">Vitae phasellus</h2>
            <p>
              Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
              Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
              egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
              in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
            <Features>
              <Article
                title="Artikel Tenda"
                imageUrl="images/pic04.jpg"
                linkUrl="/tono">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
              </Article>
              <Article
                title="Artikel Tenda"
                imageUrl="images/pic04.jpg"
                linkUrl="/tono">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
              </Article>
              <Article
                title="Artikel Tenda"
                imageUrl="images/pic04.jpg"
                linkUrl="/tono">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
              </Article>
              <Article
                title="Artikel Tenda"
                imageUrl="images/pic04.jpg"
                linkUrl="/tono">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
              </Article>
            </Features>

            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Browse All
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Wrapper>

      <Footer />
    </>
  )
}

export default Home
