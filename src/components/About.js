import React from "react";
import Links from "./Links"

function About(props) {
  let propsBio = props.bio
  if (propsBio){
    return (<div id="about">
    <h2>About Me</h2>
    <p>{propsBio}</p>
    <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    <Links />
    <a href={props.linkedin}>{props.linkedin}</a>
    <a href={props.github}>{props.github}</a>
  </div>
    )
  } else {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>Put the bio in here</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
  }
}

export default About;
