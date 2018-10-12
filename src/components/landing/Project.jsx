import React from 'react';
import Twitter from '../../images/social-icons/twitter.svg';
import Telegram from '../../images/social-icons/telegram.svg';
import Github from '../../images/social-icons/github.svg';
import Discord from '../../images/social-icons/discord.svg';
import Logo from '../../images/logo.svg';
import * as constants from '../../data/constants';

const Project = ({ data }) => {
  return (
    <div className="project">
      <div className="project-title">
        {data.logoPath === undefined ? <span /> : <img src={Logo} alt="" />}
        <h3>{data.name}</h3>
      </div>
      <button type="button" className="btn btn-primary">
        visit website
      </button>
      <p>
        {data.description}
      </p>
      <div className="social-icons">
        {
          data.socialLinks.map((element, index) => {
            switch (element.type) {
              case constants.TWITTER:
                return <img key={`${index}-${element.type}`} src={Twitter} alt="Twitter link" />;
              case constants.GITHUB:
                return <img key={`${index}-${element.type}`} src={Github} alt="Github link" />;
              case constants.DISCORD:
                return <img key={`${index}-${element.type}`} src={Discord} alt="Discord link" />;
              case constants.TELEGRAM:
                return <img key={`${index}-${element.type}`} src={Telegram} alt="Telegram link" />;
              default:
                return null;
            }
          })
        }
      </div>
    </div>
  );
};

export default Project;
