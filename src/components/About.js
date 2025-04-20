import React from 'react';
import logo from '../assets/logo.js';

function About({  image = "https://via.placeholder.com/215", about, github, linkedin }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
      <p>
        <a href={github}>GitHub</a>
      </p>
      <p>
        <a href={linkedin}>LinkedIn</a>
      </p>
    </aside>
  );
}

export default About;
