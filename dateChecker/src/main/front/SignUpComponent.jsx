import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DialogActions from '@material-ui/core/DialogActions';
import axios from 'axios'; // Add for Ajax
import Dialog from '@material-ui/core/Dialog';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  modal: {
    //position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class SignUpComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      name: "",
      email: "",
      open: false,
      isTrue: false,
      message: ""
    }
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleValueChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleFormSubmit(e) {
    e.preventDefault()

    await axios.get('/join', { params: this.state })
      .then(res => {
        console.log("response: " + res.data);
        this.setState({
          isTrue: res.data
        });
      });

      this.handleMessage();
      this.handleOpen();
  }

  handleMessage() {
    if (this.state.isTrue == true) {
      this.setState({
        message: "Succesful Join!!"
      })
    } else {
      this.setState({
        message: "Failed Join!!"
      })
    }
  }

  handleOpen() {
    this.setState({
      open: true
    });
  };

  handleClose() {
    if(this.state.isTrue==true) {
      document.location.href = "/SignIn";
    } else {
      this.setState({
      open: false
    });
    }

  };


  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={this.handleFormSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="Your ID"
                  autoFocus
                  onChange={this.handleValueChange}
                  value={this.state.id}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  name="name"
                  autoComplete="lname"
                  onChange={this.handleValueChange}
                  value={this.state.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={this.handleValueChange}
                  value={this.state.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleValueChange}
                  value={this.state.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
          </Button>
          </form>
        </div>

        <Dialog open={this.state.open} onClose={this.handleClose}>
          <div className={classes.modal}>
            <h2 id="simple-modal-title">{this.state.message}</h2>
          </div>
          <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            confirm
          </Button>
        </DialogActions>
        </Dialog>


        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default withStyles(useStyles)(SignUpComponent);