/* global window */
import React from 'react';

/* ---- CHILD COMPONENTS ---- */
import HowItWorks from './HowItWorks';

require('./LandingPage.scss');

const LandingPage = () => (
  <div>
    <div id="wrapper" className="">
      <div className="cover landing-page landing-full-text flex-row-center-center">{'SAMPLE TEXT HOME LANDING PAGE'}</div>
      <HowItWorks />
    </div>
  </div>
);

export default LandingPage;
