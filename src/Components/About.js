import React from "react";
import {GrCodeSandbox, GrGithub} from "react-icons/gr";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <div>
        <p>
          <b>
            This website can help people to find new activities to do if they
            are bored.
          </b>
        </p>

        <p>
          <b>You can load random activities and try them in real life.</b>
        </p>
      </div>
      <div style={{marginTop: "50px"}}>
        <span>Made by Denis Kolaj </span>

        <a href="https://github.com/deniskola">
          <GrGithub />
        </a>

        <a href="https://codesandbox.io/u/deniskola">
          <GrCodeSandbox />
        </a>
      </div>
    </div>
  );
};

export default About;
