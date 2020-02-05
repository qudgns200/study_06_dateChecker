import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component {
	render() {
		return (
			<div>
				<h1>MainPage</h1>
			</div>
		);
	}
}

ReactDOM.render(<MainPage /> ,document.getElementById('root'));