import React from 'react';
import Logo from '../images/logo.svg';

const Footer = () => (
  <div className="footer">
    <div className="flex-wrapper">
      <div className="logo-wrapper">
        <img src={Logo} alt="" />
        <p>
          Ethereum Commonwealth
        </p>
      </div>
      <div className="links">
        <a
          href="https://github.com/EthereumCommonwealth"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a href="">Twitter</a>
        <a href="">Telegram</a>
        <a href="">Discord</a>
      </div>
    </div>
    <p>{`© ${(new Date()).getFullYear()} Ethereum Commonwealth`}</p>
  </div>
)

export default Footer;
