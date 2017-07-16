import React from 'react';
import { InputItems } from './FormInput';
import TopNav from '../Navigation/TopNav';
import Footer from '../Navigation/Footer';

require('./SignUp.scss');

const SignUpContainer = () => (
  <div>
    <TopNav />
    <div id="wrapper">
      <div id="wrapper" className="flex-column-center-center">
        <div id="header" className="flex-w flex-row-center-center">REGISTRATION FORM</div>
        <div className="form-wrapper flex-column-center-center">
          {
            InputItems.map(item => (
              <div key={item.label} className="form-row flex-row-center-start">
                <div className="form-label">
                  <label>{item.label}</label>
                </div>
                <div className="form-input flex-row-center-start">
                  {
                    item.input.map(input => (
                      <input key={input.placeholder} placeholder={input.placeholder} />
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
        <button className="btn-standard">CREATE ACCOUNT</button>
      </div>
    </div>
    <Footer />
  </div>
);

export default SignUpContainer;
