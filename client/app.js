import React from 'react';
import { connect } from 'react-redux';

import '../public/assets/reset.scss';
import '../public/assets/layout.scss';
import '../public/assets/global.scss';

import TopNav from './src/sample/Navigation/TopNav';
import Footer from './src/sample/Navigation/Footer';

const App = props => (
  <div id="wrapper">
    <TopNav />
    { props.children }
    <Footer />
  </div>
);

export default connect(null, null)(App);
