import React from 'react';
import ReactDOM from 'react-dom';
import SignIn_Component from './SignInPageComponent.jsx';

export function SignIn() {
	return(
		<div>
			<SignIn_Component />
		</div>
	);
}

ReactDOM.render(<SignIn/> ,document.getElementById('root'));