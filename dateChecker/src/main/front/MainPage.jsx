import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component {

    render() {
        return (
            <div className="main">Main Page</div>
        );
    }

}

ReactDOM.render(<MainPage />, document.getElementById('root'));