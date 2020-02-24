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
              <div className="link-block footer-menu__link-block">
                <div className="label-link footer-menu__label-link">DOCS</div>
                <a className="link link-block__link" href="/#">Installation</a>
                <a className="link link-block__link" href="/#">Main Concepts</a>
                <a className="link link-block__link" href="/#">Advanced Guides</a>
                <a className="link link-block__link" href="/#">API Reference</a>
                <a className="link link-block__link" href="/#">Hooks</a>
                <a className="link link-block__link" href="/#">Testing</a>
                <a className="link link-block__link" href="/#">Concurrent Mode</a>
                <a className="link link-block__link" href="/#">Contributing</a>
                <a className="link link-block__link" href="/#">FAQ</a>
              </div>
            </div>
            <div className="wrapper-link">
              <div className="link-block footer-menu__link-block">
                <div className="label-link footer-menu__label-link">CHANNELS</div> 
                <a className="link link-block__link" href="/#">GitHub</a>
                <a className="link link-block__link" href="/#">Stack Overflow</a>
                <a className="link link-block__link" href="/#">Forums</a>
                <a className="link link-block__link" href="/#">DEV</a>
                <a className="link link-block__link" href="/#">Facebook</a>
                <a className="link link-block__link" href="/#">Twitter</a>
              </div>
            </div>
            <div className="wrapper-link">
              <div className="link-block footer-menu__link-block">
                <div className="label-link footer-menu__label-link">COMMUNITY</div>
                <a className="link link-block__link" href="/#">Code of Conduct</a>
                <a className="link link-block__link" href="/#">Community Resources</a>
              </div>
            </div>
            <div className="wrapper-link">
              <div className="link-block footer-menu__link-block">
                <div className="label-link footer-menu__label-link">MORE</div>
                <a className="link link-block__link" href="/#">Tutorial</a>
                <a className="link link-block__link" href="/#">Blog</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
