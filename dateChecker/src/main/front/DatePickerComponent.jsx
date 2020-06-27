import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'; // Add for Ajax
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import  DateFnsUtils  from '@date-io/date-fns'; // choose your lib
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  marginStyle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
});

class DatePickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      input_date: new Date()
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleonClick = this.handleonClick.bind(this);
  }

  componentDidMount() {
    axios.get('/getUserInfo')
      .then(res => {
        this.setState({ id: res.data });
      });
  }

  handleDateChange(date) {
    this.setState({
      input_date: date
    });
  };

  async handleonClick(e) {
    e.preventDefault();

    await axios.get('/inputDate', { params: this.state })
    document.location.href = "/Main";
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.marginStyle}>
            <Typography component="h1" variant="h5">
              Input Date
            </Typography>
          </div>
          <TextField
            id="filled-textarea"
            label="Title"
            placeholder="Placeholder"
            multiline
            fullWidth
            variant="filled"
          />
          <div className={classes.marginStyle}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                id="date-picker-dialog"
                value={this.state.input_date}
                onChange={this.handleDateChange}
                format={"MM/dd/yyyy"}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <Button variant="contained" color="primary" onClick={this.handleonClick} fullWidth>
            Add
          </Button>
          <Button variant="contained" fullWidth href="/Main">
            Cancel
        </Button>
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyles)(DatePickerComponent);;