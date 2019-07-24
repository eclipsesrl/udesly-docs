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
      <div className="main-container">
        <div className="home-wrapper">
            <img src="/assets/udesly-adapter.svg" />

            <div className="home-cards-wrapper">
              <div className="home-card">
                <img src="/assets/webflow-to-shopify.svg" />
                <p>
                  Follow a step by step guide to learn how to convert your Webflow project to a Shopify theme
                </p>
                <div className="home-card-actions">
                    <a href="shopify-setup" className="primary-button">Webflow to Shopify</a>
                </div>
              </div>
              <div className="home-card">
                <img src="/assets/webflow-to-wordpress.svg" />
                <p>
                  Discover how to convert your Webflow project to a Wordpress theme with the Adapter
                </p>
                <div className="home-card-actions">
                <a href="wordpress-setup" className="primary-button">Webflow to WordPress</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
