import "./login.css";
import { Grid, TextField, Button, Paper } from "@material-ui/core";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";
import { CircularProgress } from "@material-ui/core";
import { Link, Redirect } from 'react-router-dom';

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(user);

  return (
    <>
      <Grid
        container
        className="loginscreen"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid className="siteInfo" justifyContent="center" alignItems="center">

        <Grid item className="title">
          <h1  className="logintext">Vrukshavalli</h1>
        </Grid>
        <Grid item className="description">
          <h2 className="logintext">One Tree Can Make change</h2>
        </Grid>
        </Grid>
        <Grid
          container
          className="mainscreen"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item className="img" xs={6}>
            <img src={ PF+"finalimg.png"} alt="" className="loginimage" />
          </Grid>
          <Grid item className="loginform" xs={4}>
            <form className="loginBox" onSubmit={handleClick}>
              <h2>Log in</h2>
              <input
                id="outlined-basic"
                placeholder="email"
                type="email"
                className="loginInput"
                required
                ref={email}
              />
              <input
                id="outlined-basic"
                type="password"
                placeholder="password"
                className="loginInput"
                ref={password}
                required
              />
              <Button variant="contained" color="primary" className="loginButton" type="submit">
                {isFetching ? <CircularProgress size="20px" /> : "Log In"}
              </Button>
              <span className="loginForgot">Forgot Password?</span>

              <Link to="/register" style={{textDecoration:"none"}}>
              <Button variant="contained" color="secondary" className="loginRegisterButton">
                  {isFetching ? (
                    <CircularProgress size="20px" />
                  ) : (
                    "Create a New Account"
                  )}
                </Button>
             </Link>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
