import Home from "./pages/home/home"
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Profile from "./pages/profile/Profile";
import Reward from "./pages/Reward/Rewards"
import Error from "./pages/404error/Error";
import {createTheme, ThemeProvider } from "@material-ui/core"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


const theme = createTheme({
  palette:{
    primary:{
      main:'#a1ce35'
      
    },
    secondary:{
      main: '#44be49'
    },
    success:{
      main: '#fdd403'
    }
  }
})

function App() {

  const {user} = useContext(AuthContext)
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>

      <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>

        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login />}
        </Route>
        
        <Route path="/register">
        {user ? <Redirect to="/"/> : <Register />}\
        </Route>

        <Route path="/profile/:username">
        <Profile />
        </Route>
        
        <Route path="/rewards">
        <Reward/>
        </Route>

        <Route path="/error">
        <Error/>
        </Route>

      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
