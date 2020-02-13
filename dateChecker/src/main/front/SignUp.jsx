import React from 'react';
import SignUpComponent from './SignUpComponent.jsx';
import ReactDOM from 'react-dom';

export default function SignUp() {

  return (
    <div>
      <SignUpComponent />
    </div>
  );

}

ReactDOM.render(<SignUp />, document.getElementById('root'));