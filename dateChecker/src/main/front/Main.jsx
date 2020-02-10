import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './MainComponent.jsx';

export default function Main() {

  return (
    <div>
      <MainComponent/>
    </div>
  );

}

ReactDOM.render(<Main />, document.getElementById('root'));