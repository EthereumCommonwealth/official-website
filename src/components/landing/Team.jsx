import React from 'react';
import Avatar from '../../images/yohangraterol.jpg';
import Logo from '../../images/logo.svg';

const Team = () => (
  <div className="team-container">
    <div className="title">
      <span />
      <h3>our team</h3>
      <img src={Logo} alt="" />
    </div>
    <div className="team-members-container">
      <div>
        <img src={Avatar} alt="" />
        <p className="name">
          Yohan Graterol
        </p>
        <p className="charge">
          cto
        </p>
        <p className="description">
          The entrepreneur and inventor in the areas of mobile development, blocking,
          digital marketing, as well as in the areas of AI and ERP.
        </p>
      </div>
      <div>
        <img src={Avatar} alt="" />
        <p className="name">
          Yohan Graterol
        </p>
        <p className="charge">
          cto
        </p>
        <p className="description">
          The entrepreneur and inventor in the areas of mobile development, blocking,
          digital marketing, as well as in the areas of AI and ERP.
        </p>
      </div>
      <div>
        <img src={Avatar} alt="" />
        <p className="name">
          Yohan Graterol
        </p>
        <p className="charge">
          cto
        </p>
        <p className="description">
          The entrepreneur and inventor in the areas of mobile development, blocking,
          digital marketing, as well as in the areas of AI and ERP.
        </p>
      </div>
      <div>
        <img src={Avatar} alt="" />
        <p className="name">
          Yohan Graterol
        </p>
        <p className="charge">
          cto
        </p>
        <p className="description">
          The entrepreneur and inventor in the areas of mobile development, blocking,
          digital marketing, as well as in the areas of AI and ERP.
        </p>
      </div>
    </div>
  </div>
);

export default Team;
