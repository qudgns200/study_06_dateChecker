import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    }
}));

function loginForm() {
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
}

export default loginForm;