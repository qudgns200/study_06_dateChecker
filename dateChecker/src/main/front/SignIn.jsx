import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignInComponent from './SignInComponent.jsx';
import SignUp from './SignUp.jsx';
import ReactDOM from 'react-dom';

export default function SignIn() {

  return (
    <div>
      <BrowserRouter>
        <SignInComponent />
        <Route exact path="/SignUp" component={SignUp} />
      </BrowserRouter>
    </div>
  );

}

ReactDOM.render(<SignIn />, document.getElementById('root'));