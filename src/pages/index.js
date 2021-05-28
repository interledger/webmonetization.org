import React from 'react'
import { Container } from '@material-ui/core'
import Layout from '@theme/Layout'

class HomeSplash extends React.Component {
  render() {
    const { siteConfig } = this.props
    const { baseUrl } = siteConfig

    const SplashContainer = (props) => (
      <div className='homeContainer'>
        <div className='homeSplashFade'>
          <div className='wrapper homeWrapper'>{props.children}</div>
        </div>
      </div>
    )

    const Logo = (props) => (
      <img
        src={props.img_src}
        alt='Web Monetization Icon'
        style={{ width: '120px' }}
      />
    )

    const ProjectTitle = () => (
      <div className='projectTitle'>
        <h2>{siteConfig.title}</h2>
        <small>{siteConfig.tagline}</small>
      </div>
    )

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/wm-icon-animated.svg`} />
        <img src={`${baseUrl}img/grey_wm_logo.svg`} className='bgLogo' alt='' />
        <div className='inner'>
          <ProjectTitle siteConfig={siteConfig} />
        </div>
      </SplashContainer>
    )
  }
}

export default class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`

    const SpashFooter = () => {
      return (
        <div className='splashFooter'>
          <div>
            Web Monetization is being proposed as a W3C standard at&nbsp;
            <a
              href='https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785'
              target='_blank'
              rel='noreferrer noopener'
            >
              the Web Platform Incubator Community Group
            </a>
            .
          </div>
        </div>
      )
    }

    const TextBlock = (props) => (
      <div className='contentBlock'>
        <div className='contentContainer'>{props.children}</div>
      </div>
    )

    const Motivation = () => (
      <TextBlock>
        <h2>Motivation</h2>
        <p>
          The ability to transfer money has been a long-standing omission from
          the web platform. As a result, the web suffers from a flood of
          advertising and corrupt business models. Web Monetization provides an
          open, native, efficient, and automatic way to compensate creators, pay
          for API calls, and support crucial web infrastructure.
        </p>
      </TextBlock>
    )

    const WhyNow = () => (
      <TextBlock>
        <h2>Why Now?</h2>
        <p>
          Until recently, there hasn't been an open, neutral protocol for
          transferring money.{' '}
          <a
            href='https://interledger.org'
            target='_blank'
            rel='noreferrer noopener'
          >
            Interledger
          </a>{' '}
          provides a simple, ledger-agnostic, and currency-agnostic method for
          the transfer of small quantities of money. This opens up the
          possibility for streaming money, which makes Web Monetization possible
          for the first time.
        </p>
      </TextBlock>
    )

    const CardBlock = (props) => (
      <div className='contentBlock' id={props.id}>
        <div className='cardBlock'>{props.children}</div>
      </div>
    )

    const MergeCard = (props) => (
      <div className='card card-merge'>
        <img
          className='card-merge-icon'
          src='/img/icon-merge.svg'
          alt='merge icon'
        />
        <span>
          Do you know another {props.label}?&nbsp;
          <a
            href='https://github.com/WICG/webmonetization/edit/main/src/pages/index.js'
            target='_blank'
            rel='noreferrer noopener'
          >
            Make a PR
          </a>
        </span>
      </div>
    )

    const CardSet = (props) => (
      <div className='cardContainer'>
        {props.cards.map(({ name, image, link, desc }) => {
          if (desc) {
            return (
              <a
                className='card card-wide'
                href={link}
                target='_blank'
                rel='noreferrer noopener'
                key={name}
              >
                <img src={`${baseUrl}img/${image}`} alt={name} />
                <div className='card-wide-content'>
                  <h4>{name}</h4>
                  <p>{desc}</p>
                </div>
                <div className='card-wide-arrow'>
                  <img
                    src={`${baseUrl}img/icon-arrow-right.svg`}
                    alt='icon arrow right'
                  />
                </div>
              </a>
            )
          } else {
            return (
              <a
                className='card'
                href={link}
                target='_blank'
                rel='noreferrer noopener'
                key={name}
              >
                <img src={`${baseUrl}img/${image}`} alt={name} />
              </a>
            )
          }
        })}
      </div>
    )

    const Wallets = () => (
      <CardBlock id='wallets'>
        <h2>Web Monetization Wallets</h2>
        <p>These providers offer ILP-enabled wallets.</p>
        <CardSet cards={siteConfig.customFields.wallets} />
        <MergeCard label='wallet' />
      </CardBlock>
    )

    const Providers = () => (
      <CardBlock id='providers'>
        <h2>Web Monetization Providers</h2>
        <p>These providers offer Web Monetization services</p>
        <CardSet cards={siteConfig.customFields.providers} />
        <MergeCard label='providers' />
      </CardBlock>
    )

    const Browsers = () => (
      <CardBlock id='browsers'>
        <h2>Web Monetization Supported Browsers</h2>
        <p>
          These browsers implement Web Monetization natively or via an extension
        </p>
        <CardSet cards={siteConfig.customFields.browsers} />
        <MergeCard label='supported browser' />
      </CardBlock>
    )

    const Search = () => (
      <CardBlock id='search'>
        <h2>Web Monetization Enabled Search Engines</h2>
        <p>These search engines implement Web Monetization features</p>
        <CardSet cards={siteConfig.customFields.search} />
        <MergeCard label='search engine' />
      </CardBlock>
    )

    const Tools = () => (
      <CardBlock id='tools'>
        <h2>Web Monetization Tools</h2>
        <p>These tools enable Web Monetization features</p>
        <CardSet cards={siteConfig.customFields.tools} />
        <MergeCard label='tool' />
      </CardBlock>
    )

    const Resources = () => (
      <Container padding={['left', 'right']} className='resources'>
        <h2>Resources</h2>
        <div className='resourceContainer'>
          <div className='resource'>
            <h3>Documentation</h3>
            <p>
              Resource on how to add Web Monetization to your site.
              <br />
              <a href={docUrl('docs/getting-started', this.props.language)}>
                Read docs ›
              </a>
            </p>
          </div>
          <div className='resource'>
            <h3>Explainer</h3>
            <p>
              The explainer submitted to the W3C.
              <br />
              <a href={docUrl('docs/explainer', this.props.language)}>
                Read explainer ›
              </a>
            </p>
          </div>
          <div className='resource'>
            <h3>Specification</h3>
            <p>
              The formal specification.
              <br />
              <a
                href={docUrl('specification.html', this.props.language)}
                target='_blank'
                rel='noreferrer noopener'
              >
                Read specs ›
              </a>
            </p>
          </div>
          <div className='resource'>
            <h3>
              <img
                src='https://awesome.re/badge-flat2.svg'
                alt='Awesome'
                style={{ maxWidth: '100%' }}
              />
            </h3>
            <p>
              An{' '}
              <a href='https://github.com/sindresorhus/awesome#readme'>
                awesome
              </a>{' '}
              list of additional Web Monetization resources.
              <br />
              <a
                href='https://github.com/thomasbnt/awesome-web-monetization'
                target='_blank'
                rel='noreferrer noopener'
              >
                View list ›
              </a>
            </p>
          </div>
        </div>
        <p>
          Do you know other developer resources?{' '}
          <a
            href='https://github.com/WICG/webmonetization'
            target='_blank'
            rel='noreferrer noopener'
          >
            Make a PR
          </a>
        </p>
      </Container>
    )

    return (
      <Layout
        permalink='/'
        title={siteConfig.title}
        description={siteConfig.tagLine}
      >
        <div>
          <HomeSplash siteConfig={siteConfig} language={language} />
          <SpashFooter />
          <div className='mainContainer'>
            <Motivation />
            <WhyNow />
            <Wallets />
            <Providers />
            <Browsers />
            <Search />
            <Tools />
            <Resources />
          </div>
        </div>
      </Layout>
    )
  }
}
