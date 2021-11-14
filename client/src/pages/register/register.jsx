import {Grid, Button, TextField, Paper } from "@material-ui/core";
import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();


const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
return (
<>
<Grid container
direction="column"
justifyContent="center"
alignItems="center">
  <Grid className="siteInfo" justifyContent="center" alignItems="center">

<Grid item className="title">
  <h1  className="logintext">Vrukshavalli</h1>
</Grid>
<Grid item className="description">
  <h2 className="logintext">One Tree Can Make change</h2>
</Grid>
</Grid>
    <Grid container className="mainscreen" 
     direction="row"
     justifyContent="center"
     alignItems="center">
      <Grid item className="img" xs={6}>
      <img src={ PF+"register.jfif"} alt="" className="registerimage" />
      </Grid>
      <Grid item className="loginform" xs={4}>
      
      <form className="loginBox" onSubmit={handleClick}>
              <h3>Sign Up</h3>
              <input ref={username} required placeholder="Username" ref={username} className="loginInput" />
              <input ref={email} required placeholder="Email" type="email" ref={email} className="loginInput" />
              <input ref={password} required placeholder="Password" type="password" ref={password} className="loginInput" />
              <input ref={password} required placeholder="Password Again" type="password" ref={passwordAgain} className="loginInput" />
              <Button variant="contained" color="primary" className="loginButton" type="submit" >Sign Up</Button>
              
              <Link to={"/login"} style={{textDecoration:"none"}}>
              <Button variant="contained"color="secondary" className="loginRegisterButton">Log into Account</Button>
              </Link>
            
            </form>
        
      </Grid>
    </Grid>

</Grid>
    </>
  );
}
