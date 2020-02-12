import React from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class DatePickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker value={this.state.date} onChange={this.handleDateChange} />
        </MuiPickersUtilsProvider>

        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          fullWidth
          variant="filled"
        />

        <Button variant="contained" color="primary" fullWidth>
          Add
        </Button>
      </div>
    );
  }
}

export default DatePickerComponent;