import React from 'react';
import { connect } from 'react-redux';

import '../public/assets/reset.scss';
import '../public/assets/layout.scss';
import '../public/assets/global.scss';

const App = props => (
  <div id="wrapper">
    { props.children }
  </div>
);

export default connect(null, null)(App);
