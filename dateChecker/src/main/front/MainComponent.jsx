import React from 'react';
import axios from 'axios'; // Add for Ajax
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

const useStyles = theme => ({
  listDiv: {
    background: 'gray',
    padding: theme.spacing(1),
    alignItems: 'center',
  },
  buttonDiv: {
    margin: '20px'
  },
  listData: {
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
          <h1>From D-day : {one}</h1>
        </Button>
      );
    })

    return (
      <Container maxWidth="xs">
        <div>
          <div className={classes.listDiv}>
            <h3><center>{this.state.id} 의 D-Day</center></h3>
          </div>
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