import React from "react";
import {GrCodepen, GrGithub, GrInstagram, GrTwitter} from "react-icons/gr";
import {IconContext} from "react-icons";

const About = () => {
  return (
    <div className="about">
      <p>This web app helps you to find an activity if you are bored.</p>
      <p>You can load random activities and try them in real life.</p>
      <p>Made by Denis Kolaj</p>
      <div>
        <GrGithub />
      </div>
    </div>
  );
};

export default About;
