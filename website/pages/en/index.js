/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');


class Index extends React.Component {


  render() {
    const {config} = this.props;
    
    return (
      <div className="main-container home">
        <div className="home-wrapper">
            <p className="home-subtitle">Choose your favorite <strong>CMS</strong> and follow our documentation to convert your <strong>Webflow</strong> project</p>
            <div className="home-cards-wrapper">
              <a className="home-card" href="/shopify-setup">
                <img src="/assets/shopify-logo.svg" />
              </a>
              <a className="home-card" href="/wordpress-setup">
                <img src="/assets/wordpress-logo.svg" />
              </a>
              <a className="home-card" href="/ghost-overview">
                <img src="/assets/ghost-logo.svg" />
              </a>
              <a className="home-card" href="/netlify-how-it-works">
                <img src="/assets/netlify-logo-home.svg" />
              </a>
            </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
