import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: { currentID }
		}
	}

	render() {
		return (
			<div>
				<h1>${currentID}</h1>
			</div>
		);
	}
}

ReactDOM.render(<MainPage />, document.getElementById('root'));