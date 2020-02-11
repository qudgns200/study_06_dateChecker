import React from 'react';
import axios from 'axios'; // Add for Ajax
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

const useStyles = theme => ({
  root: {
    height: '80vh',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 10,
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
  }
});

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    }
  }

  componentDidMount() {
    axios.get('/getUserInfo')
      .then(res => {
        this.setState({ id: res.data });
      });

    axios.get('/getDateInfo')
      .then(res => {
        console.log("data: " + res.data);
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="xs" className={classes.root}>
        <div className={classes.listDiv}>
          <List>
            <Paper>
              <ListItem button>
                <ListItemText primary={this.state.id} />
                <h1>Memo</h1>
              </ListItem>
            </Paper>
          </List>
        </div>
        <div className={classes.buttonDiv}>
          <h1>
            <Button fullWidth
              variant="contained"
              color="primary">
              <AddCircleTwoToneIcon />
            </Button>
          </h1>
        </div>
      </Container>

    );
  }
}

export default withStyles(useStyles)(MainComponent);