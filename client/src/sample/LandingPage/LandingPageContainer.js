/* global window */
import React from 'react';

/* ---- CHILD COMPONENTS ---- */
import TopNav from '../Navigation/TopNav';
import Footer from '../Navigation/Footer';
import HowItWorks from './HowItWorks';

require('./LandingPage.scss');

const LandingPage = () => (
  <div id="wrapper" className="">
    <TopNav isDynamic={true} />
    <div className="cover landing-page landing-full-text flex-row-center-center">{'SAMPLE TEXT HOME LANDING PAGE'}</div>
    <HowItWorks />
    <Footer />
  </div>
);

export default LandingPage;
