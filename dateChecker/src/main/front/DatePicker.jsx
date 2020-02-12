import React from 'react';
import ReactDOM from 'react-dom';
import DatePickerComponent from './DatePickerComponent.jsx';

export default function DatePicker() {

  return (
    <div>
      <DatePickerComponent/>
    </div>
  );

}

ReactDOM.render(<DatePicker />, document.getElementById('root'));