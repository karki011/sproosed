import React from "react";
import {
  Container,
  CssBaseline,
  // Avatar, May include our own Avatar Image or a User's Avatar Image in its place
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Box,
  Link,
} from "@material-ui/core";
// import Link from "."; Will need to switch this to react-router later
import { makeStyles } from '@material-ui/core/styles';
import { Copyright } from "..";

class LoginForm extends React.Component {
  state = { username: "", password: "" };
  
  render() {
    const useStyles = makeStyles(theme => ({
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
        width: '100%',
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
    
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>
          {/* <Avatar className={useStyles.avatar}>
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={useStyles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
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
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default LoginForm;
