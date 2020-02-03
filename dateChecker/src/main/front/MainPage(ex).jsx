import React from 'react';
import ReactDOM from 'react-dom';
import loginForm from './LoginPage';
import axios from 'axios';
import { TextField, CssBaseline, Typography, Container, makeStyles } from '@material-ui/core';

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: ''
        };
        const useStyles = makeStyles(theme => ({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                margin: 'auto',
                maxWidth: 500,
            },
            image: {
                width: 128,
                height: 128,
            },
            img: {
                margin: 'auto',
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
            },
        }));
    }

    
    /* Component Life Cycle : constructor -> componentWillMount -> render */

    /*
    async componentDidMount() {
        let { data: name } = await axios.get('http://localhost:8080/name?no=3');
        this.setState({ name });
    };
    */

    render() {

        const classes = useStyles();

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <form className="userForm" noValidate autoComplete="off">
                                        <div><TextField id="userId" label="id" /></div>
                                        <div><TextField id="userPassword" label="password" /></div>
                                        <div><TextField id="userName" label="name" /></div>
                                        <div><TextField id="userEmail" label="email" /></div>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );

        /* const { name } = this.state;

        if (name.length > 0) {
            return (
                <div className="main">
                    <h1>{name}</h1>
                </div>
            )
        } else {
            return (
                <div className="main">
                    <h1>Main Page</h1>
                </div>

            );
        }
        */
    }
}

ReactDOM.render(<MainPage />, document.getElementById('root'));