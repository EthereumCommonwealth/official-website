import React from 'react';
import * as constants from '../../data/constants';

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
          data.socialLinks.map((element, index) => {
            switch (element.type) {
              case constants.TWITTER:
                return (
                  <a className="team-member-social-item" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                );
              case constants.GITHUB:
                return (
                  <a className="team-member-social-item" href="#">
                    <i className="fab fa-github" />
                  </a>
                );
              case constants.DISCORD:
                return (
                  <a className="team-member-social-item" href="#">
                    <i className="fab fa-discord" />
                  </a>
                );
              case constants.TELEGRAM:
                return (
                  <a className="team-member-social-item" href="#">
                    <i className="fab fa-telegram-plane" />
                  </a>
                );
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
