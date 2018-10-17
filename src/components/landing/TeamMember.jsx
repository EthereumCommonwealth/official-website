import React from 'react';
import { baseUrl } from '../../config';

const TeamMember = ({ data }) => (
  <div>
    <img src={`${baseUrl}${data.avatar}`} alt="" />
    <p className="name">
      {data.name}
    </p>
    <p className="charge">
      {data.position}
    </p>
    <div className="team-member-social">
      {
        data.socialNetworks.map((element) => {
          return (
            <a className="team-member-social-item" href={element.url} target="_blank">
              <i className={element.prefix} />
            </a>
          );
        })
      }
    </div>
    <p className="description">
      {data.bio}
    </p>
  </div>
);

export default TeamMember;
