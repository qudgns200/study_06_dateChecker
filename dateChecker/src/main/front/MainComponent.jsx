import React from 'react';
import axios from 'axios'; // Add for Ajax
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

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
        const arrayList = [];
        res.data.forEach(el => {
          arrayList.push({
            dDay: el.dDay,
            inputDate: el.inputDate
          });
        });

        this.setState({
          dday: arrayList
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  moveDatePicker() {
    document.location.href = "/DatePicker";
  }

  render() {
    const { classes } = this.props;

    const ddayList = this.state.dday.map((el, content) => {
      return (
        <div>
          <Button variant="contained" fullWidth className={classes.listData}>
            <h1>{el.inputDate} : {el.dDay}</h1>
            <Button><UpdateIcon /></Button>
            <Button><DeleteIcon /></Button>
          </Button>
        </div>
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