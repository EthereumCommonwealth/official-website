import React from 'react';
import BitcounTalkIcon from '../../images/social-icons/bitcoinTalk.svg';
import BitcounTalkIconHover from '../../images/social-icons/bitcoinTalkHover.svg';

const handleMouseOver = (e) => {
  e.target.setAttribute('src', BitcounTalkIconHover);
};

const handleMouseOut = (e) => {
  e.target.setAttribute('src', BitcounTalkIcon);
};

const Project = ({ data }) => {
  return (
    <div className="project">
      <div className="project-title">
        {data.logoClass === undefined ? <span className="default-logo" /> : <span className={data.logoClass} />}
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
          data.socialLinks.map((element) => {
            if (element.bitcoinTakl) {
              return (
                <a
                  href={element.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`${element.url}${element.prefix}`}
                >
                  <img
                    id="bitcoinTalk"
                    src={BitcounTalkIcon}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  />
                </a>
              );
            }
            return (
              <a
                href={element.url}
                target="_blank"
                rel="noopener noreferrer"
                key={`${element.url}${element.prefix}`}
              >
                <i className={element.prefix} />
              </a>
            );
          })
        }
      </div>
    </div>
  );
};

export default Project;
