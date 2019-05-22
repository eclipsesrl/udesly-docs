/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <div className="intro-section">
      <h2 className="promo-title">
        What are you looking for?
      </h2>
        <p>In this documentation you will find all you need to use Webflow with other CMS</p>
      </div>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
        <ProjectTitle></ProjectTitle>
          <PromoSection>
            <Button href={docUrl('wordpress-setup')}>Webflow to WordPress</Button>
            <Button href={docUrl('shopify-setup')}>Webflow to Shopify</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="shopify-section">
        {[
          {
            content: 'Create your Shopify template in Webflow and customize each single part of it without writing a line of code. It will let you use Webflow to design the template and handle the store from Shopify admin panel. It’s simple, you find whatever it takes in this documentation section.',
            image: `${baseUrl}img/shopify.png`,
            imageAlign: 'left',
            title: 'Convert to Shopify',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content: 'With the Udesly Adapter you can use the best visual design tool as a WordPress themebuilder to create sophisticated layouts with limitless functionality. Step by step we’ll guide you to convert your Webflow template to a WordPress one.',
            image: `${baseUrl}img/wordpress.png`,
            imageAlign: 'right',
            title: 'Convert to WordPress',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="threeColumn">
        {[
          {
            content: 'Want to start from scratch? In this documentation you find all you need to convert your Webflow template to a WordPress or Shopify one.',
            title: 'Custom Attribute',
          },
          {
            content: 'To save your time we have introduced complete Elements Pack that you only have to copy and paste into your Webflow template.',
            title: 'Ready to use elements',
          },
          {
            content: 'At your disposal, also our ready to use Starter Themes. Customize each single aspect of them and convert it through the Adapter.',
            title: 'Starter Theme',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer home">
          <Features />
          <LearnHow />
          <TryOut />
        </div>
      </div>
    );
  }
}

module.exports = Index;
