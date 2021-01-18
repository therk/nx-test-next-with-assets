import React from 'react';

import './about.module.css';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div>
      <h1>Welcome to about!</h1>
      <img src="/assets/ui/abbout.png" alt="About"></img>
    </div>
  );
}

export default About;
