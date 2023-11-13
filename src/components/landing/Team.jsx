import React from 'react';
import Logo from '../../images/logo.svg';
import TeamMember from'./TeamMember';
import { team } from '../../data/teamMembers';

const Team = () => {
  return (
    <div id="team" className="team-container">
      <div className="title">
        <span />
        <h3>our team</h3>
        <img src={Logo} alt="" />
      </div>
      <div className="team-members-container">
        {
          team.map((element) => {
            return <TeamMember data={element} key={element.position} />;
          })
        }
      </div>
    </div>
  );
};

export default Team;
