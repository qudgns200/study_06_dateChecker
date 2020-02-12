import React from 'react';
import axios from 'axios'; // Add for Ajax
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

const useStyles = theme => ({
  root: {
    height: '80vh',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  listDiv: {
    height: '65vh',
    background: 'gray',
    margin: '10px',
    padding: theme.spacing(1),
  },
  buttonDiv: {
    height: '8vh',
    background: 'blue',
    margin: '20px'
  },
  listData: {
    padding: '30px',
    margin: '5px 0'
  }
});

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      dday: []
    }
    this.moveDatePicker = this.moveDatePicker.bind(this);
  }

  componentDidMount() {
    axios.get('/getUserInfo')
      .then(res => {
        this.setState({ id: res.data });
      });

    axios.get('/getDateInfo')
      .then(res => {
        console.log("data: " + res.data);
        this.setState({ dday: res.data });
      });
  }

  moveDatePicker() {
    document.location.href = "/DatePicker";
  }

  render() {
    const { classes } = this.props;

    const ddayList = this.state.dday.map(one => {
      return (
        <Button variant="contained" fullWidth className={classes.listData}>
          {one}
        </Button>
      );
    })

    return (
      <Container maxWidth="xs" className={classes.root}>
        <div className={classes.listDiv}>
          <h3>{this.state.id} 님</h3>
            {ddayList}
        </div>

        <div className={classes.buttonDiv}>
          <h1>
            <Button 
              fullWidth
              component="button"
              variant="contained"
              color="primary"
              onClick={this.moveDatePicker}
              >
              <AddCircleTwoToneIcon />
            </Button>
          </h1>
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyles)(MainComponent);