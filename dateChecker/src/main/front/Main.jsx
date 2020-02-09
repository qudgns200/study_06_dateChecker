import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; // Add for Ajax

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    }
  }

  componentDidMount() {
    axios.get('/getUserInfo')
    .then(res => {
      console.log("response: " + res.data);
      this.setState({ id: res.data });
    });
  }

  render() {
    return(
      <div>
        <h1>{this.state.id}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));