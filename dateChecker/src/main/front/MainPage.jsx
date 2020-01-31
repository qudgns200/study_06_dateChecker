import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component {

    render() {
        return (
            <div className="main">
                <h1>Main Page</h1>
                <h1>${name}</h1>
            </div>
            
        );
    }

}

ReactDOM.render(<MainPage />, document.getElementById('root'));