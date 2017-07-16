import React from 'react';

require('./Login.scss');

const Login = () => (
  <div id="wrapper" className="landing-page flex-row-center-center">
    <div className="form-wrapper flex-column-center-center">
      <div className="form-row flex-row-center-start">
        <div className="form-label login-text">USERNAME</div>
        <div className="form-input">
          <input placeholder="email" />
        </div>
      </div>
      <div className="form-row flex-row-center-start">
        <div className="form-label login-text">PASSWORD</div>
        <div className="form-input">
          <input placeholder="********" />
        </div>
      </div>
    </div>
  </div>
);

export default Login;

// !user.id
//   ? <div>
//     <User />
//     <SignUp />
//     <GoogleSignIn />
//   </div>
//   : <Logout />

// import User from './components/User';
// import SignUp from './components/SignUp';
// import Logout from './components/Logout';
// import GoogleSignIn from './components/GoogleSignIn';
