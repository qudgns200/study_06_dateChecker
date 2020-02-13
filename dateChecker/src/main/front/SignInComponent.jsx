/*
  # Login Page
  # Using UI-Material Free Templete 
*/

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'; // Add for Ajax
import Dialog from '@material-ui/core/Dialog';

const useStyles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
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

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      isCorrect: 3,
      open: false
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // This function is for getting reply from Server.
  // 1. Get reply message that isCorrect Id, Password
  // 2. IsCorrect : Move main page.
  // 3. IsWrong : Show Modal and Login Again. 
  async handleFormSubmit(e) {
    e.preventDefault()

    let user = {
      id: this.state.id,
      password: this.state.password
    }

    await axios.get('/login', { params: user })
      .then(res => {
        console.log("response: " + res.data);
        this.setState({ isCorrect: res.data });
      });

    if (this.state.isCorrect == 0) {
      document.location.href = "/Main";
    } else {
      this.handleOpen();
    }
  }

  // It is function which is changed State's Value.
  // Whenever Changing TextField's Value,
  // then State's Value is Changed.
  handleValueChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOpen() {
    this.setState({
      open: true
    });
  };

  handleClose() {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
          </Typography>
            <form className={classes.form} onSubmit={this.handleFormSubmit} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="id"
                label="Your ID"
                name="id"
                autoComplete="username"
                autoFocus
                onChange={this.handleValueChange}
                value={this.state.id}
              />
              <TextField
                variant="outlined"
                margin="normal"
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
            </Button>
              <Grid container>
                <Grid item xs/>>
                <Grid item>
                  <Link href="/SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>

          <Dialog open={this.state.open} onClose={this.handleClose}>
            <div className={classes.modal}>
              <h2 id="simple-modal-title">Failed Login</h2>
              <p id="simple-modal-description">
                Wrong Password or Not exist ID...
            </p>
            </div>
          </Dialog>
        </Grid>

      </Grid>
    );
  }
}

export default withStyles(useStyles)(SignInComponent);