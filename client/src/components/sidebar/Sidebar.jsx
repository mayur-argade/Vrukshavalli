import React from 'react'
import "./sidebar.css"
import {Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { Notifications, Settings, Face, Home, Message, AcUnit } from '@mui/icons-material'
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Sidebar = () => {
    const history = useHistory();
    function LogOut(){
      localStorage.clear();
      window.location.reload();
      history.push('/login')
    }

    const { user } = useContext(AuthContext);
    return (
        <div className="sidebar">

        <div className="sidebarwrapper">
            <List >
             <Link to="/" style={{ textDecoration: "none", color:'black' }} >   
            <ListItem >
            <ListItemButton>
              <ListItemIcon>
              <Home color="success"/>
              </ListItemIcon>
              <ListItemText primary="Home" color="success" style={{textDecoration:"none"}} />
            </ListItemButton>
          </ListItem>
          </Link>
        
          <Link to="/error" style={{ textDecoration: "none", color:'black' }} >
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
              <Notifications color="success"/>
              </ListItemIcon>
              <ListItemText primary="Notifications" color="success" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to="/error" style={{ textDecoration: "none", color:'black' }} >
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
              <Message color="success"/>
              </ListItemIcon>
              <ListItemText primary="Message" color="success" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to="/rewards" style={{ textDecoration: "none", color:'black' }} > 
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
              <AcUnit color="success"/>
              </ListItemIcon>
              <ListItemText primary="Rewards"color="success"  />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to="/error"  style={{ textDecoration: "none", color:'black' }} >
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
              <Settings color="success"/>
              </ListItemIcon>
              <ListItemText primary="Settings" color="success" />
            </ListItemButton>
          </ListItem>
          </Link>

            <Link to={`profile/${user.username}`}  style={{ textDecoration: "none", color:'black' }}>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
              <Face color="success"/>
              </ListItemIcon>
              <ListItemText primary="Profile" color="success" style={{textDecoration:"none"}} />
            </ListItemButton>
          </ListItem>
          </Link>
            </List>

      <Button className="sidebarButton" onClick={LogOut}>Sign out</Button>
        </div>
        </div>
    )
}

export default Sidebar
