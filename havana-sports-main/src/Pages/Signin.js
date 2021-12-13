import React, { useState } from 'react';
import { connect } from "react-redux";
import { SigninWithJwt } from "@actions";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "flex",
        justifyContent : "center",
        alignItems : "center",
        background : "url('assets/background1.jpg')",
        backgroundSize : "cover",
        backgroundPosition : "center",

        "&::before" : {
            content : "''",
            width : "100%",
            height : "100%",
            position : "absolute",
            top : "0px",
            left : "0px",
            background : "#ac9a0096"
        }
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position : "relative",
        zIndex : 1,
        padding : 50,
        // boxShadow : "0px 0px 10px -2px #ffeb3b",
        // borderRadius : 5,
        background : "#ffffff10"
    },
    avatar: {
        margin: theme.spacing(1),
        width: 150,
        height: 150
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        height: 50,
        background: "#222",

        "&:hover" : {
            background: "#333",
        }
    },
}));

function SignIn(props) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const signinjwt = e => {
        e.preventDefault();
        const userData = {
            email : email,
            password : password,
            remember : remember
        }
        props.SigninWithJwt(userData);
    }
    return (
        <div className={classes.root}>
            <Container maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar} alt="logo" src="assets/logo.png" />
                    <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                        autoFocus
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
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox value="remember" onChange={e => setRemember(e.target.checked)} color="primary" />
                        }
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={e => signinjwt(e)}
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item sm={6}>
                            <Link href="#" style={{color : "black"}} variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item sm={6}>
                            <Link href="/signup" style={{color : "black"}} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        authUser : state.auth.user
    };
}

export default connect(mapStateToProps, { SigninWithJwt })(SignIn)