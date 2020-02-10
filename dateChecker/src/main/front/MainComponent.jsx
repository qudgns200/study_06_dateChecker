import React from 'react';
import axios from 'axios'; // Add for Ajax
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';

const useStyles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
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
    const classes = useStyles();

    return (
      <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <List>
          <ListItem button>
            <ListItemText primary={this.state.id} />
          </ListItem>
        </List>
      </div>
      </Container>
    );
  }
}

export default withStyles(useStyles)(MainComponent);