/*
  # Login Page
  # Using UI-Material Free Templete 
*/

import React from 'react';
import ReactDOM from 'react-dom';
import SignComponent from './SignInComponent.jsx';

export default function SignIn() {
  return (
    <div>
      <SignComponent/>
    </div>
  );
}

ReactDOM.render(<SignIn/>, document.getElementById('root'));