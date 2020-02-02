import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    /* Component Life Cycle : constructor -> componentWillMount -> render */

    async componentDidMount() {
        let { data: name } = await axios.get('http://localhost:8080/name?no=3');
        this.setState({ name });
        console.log(this.state.name);
    };

    render() {
        const { name } = this.state;

        if (name.length > 0) {
            return (
                <div className="main">
                    <h1>{name}</h1>
                </div>
            )
        } else {
            return (
                <div className="main">
                    <h1>Main Page</h1>
                </div>

            );
        }
    }

}
/* /*<h1>{this.state.name}</h1> */

ReactDOM.render(<MainPage />, document.getElementById('root'));