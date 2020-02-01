import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    /* Component Life Cycle : constructor -> componentWillMount -> render */
    /*
    componentWillMount() {
		client({method: 'GET', path: '/name'}).done(response => {
			this.setState({name: response});
		});
    }
    */
   componentWillMount() {
       fetch('http://localhost:8080/name?no=3')
       .then(res => res.json())
       .then(data => console.log(data));
   }

    render() {
        return (
            <div className="main">
                <h1>Main Page</h1>
                <h1>{this.state.name}</h1>
            </div>

        );
    }

}

ReactDOM.render(<MainPage />, document.getElementById('root'));