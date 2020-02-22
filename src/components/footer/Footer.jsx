import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-menu">
          <div className="left-block">
            
          </div>
          <div className="right-block">
            <div className="wrapper-link">
              <div className="link-block">
                <div className="label-link">DOCS</div>
                <a href="/#">Installation</a>
                <a href="/#">Main Concepts</a>
                <a href="/#">Advanced Guides</a>
                <a href="/#">API Reference</a>
                <a href="/#">Hooks</a>
                <a href="/#">Testing</a>
                <a href="/#">Concurrent Mode</a>
                <a href="/#">Contributing</a>
                <a href="/#">FAQ</a>
              </div>
            </div>
            <div className="wrapper-link">
              <div className="link-block">
                <div className="label-link">CHANNELS</div> 
                <a href="/#">GitHub</a>
                <a href="/#">Stack Overflow</a>
                <a href="/#">Forums</a>
                <a href="/#">DEV</a>
                <a href="/#">Facebook</a>
                <a href="/#">Twitter</a>
              </div>
            </div>
            <div className="wrapper-link">
              <div className="link-block">
                <div className="label-link">COMMUNITY</div>
                <a href="/#">Code of Conduct</a>
                <a href="/#">Community Resources</a>
              </div>
            </div>
            <div className="wrapper-link">
              <div className="link-block">
                <div className="label-link">MORE</div>
                <a href="/#">Tutorial</a>
                <a href="/#">Blog</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
