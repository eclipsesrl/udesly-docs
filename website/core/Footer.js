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

          <div className="copyright">{this.props.config.copyright}</div>
        
          <div className="footer-links">
            <a
              href="https://www.udesly.com/help-center/"
              target="_blank"
              >
              Help Center
            </a>
            |
            <a href="https://www.facebook.com/groups/373995326416699/"  target="_blank">Facebook Community</a>
            |
            <a href="https://udeslycommunity.slack.com/join/shared_invite/enQtNjc3MTY0MTk5NzAzLTE0MTE0Y2JjYmRjZTYwMDMxN2IyMjk0ZTFmOGNlNTIwYjgzM2M3NGE1OTFlZGM2ODdjYTFhZmY0OGI5NTY3NDc?fbclid=IwAR2kTt7wofn0GVYnHwAP-o5Ix8qaWkecD4BO5qnQaSykY6gwd55t5pxOEBA"  target="_blank">Slack Channel</a>
          </div>
        </section>

  
        
      </footer>
    );
  }
}

module.exports = Footer;
