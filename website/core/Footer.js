/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section>
          <div className="copyright-wrapper">
          <a href={this.props.config.baseUrl} className="nav-title-logo">
           <h2 className="title-logo">udesly</h2>
          </a>
          <div className="copyright">{this.props.config.copyright}</div>
          </div>
          <div>
            <h5>Utility Links</h5>
            <a href="https://www.udesly.com/udesly-adapter-overview/" target="_blank">
              Overview
            </a>
            <a href="https://www.udesly.com/webflow-to-wordpress/" target="_blank">
              Webflow to WordPress
            </a>
            <a href="https://www.udesly.com/webflow-to-shopify/" target="_blank">
              Webflow to Shopify
            </a>
          </div>
          <div>
            <h5>Help</h5>
            <a
              href="hhttps://www.udesly.com/help-center/"
              target="_blank"
              >
              Help Center
            </a>
            <a href="https://www.facebook.com/groups/373995326416699/"  target="_blank">Facebook Community</a>
            <a href="https://www.youtube.com/channel/UCcuEG-IjaeHRgePmiJ0f8GA"  target="_blank">Youtube Channel</a>
          </div>
          <div>
            <h5>Shop</h5>
           
            <a href="https://www.udesly.com/shop/category/webflow/udesly-adapter/" target="_blank">Udesly Adapter</a>
            <a href="https://www.udesly.com/shop/category/webflow/tools/" target="_blank">Webflow Tools</a>
            <a href="https://www.udesly.com/shop/category/webflow/templates/" target="_blank">Webflow Templates</a>
          </div>
        </section>

  
        
      </footer>
    );
  }
}

module.exports = Footer;
