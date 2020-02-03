import React from 'react';
import ReactDOM from 'react-dom';
import SignInSide from "./SignInPage.jsx";

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <SignInSide/>
            </div>
        );
    }
}

ReactDOM.render(<MainPage />, document.getElementById('root'));