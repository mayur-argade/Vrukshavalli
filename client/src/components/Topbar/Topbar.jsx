import React from "react";
import { NaturePeople, Search } from "@material-ui/icons";
import { AppBar, Toolbar } from "@material-ui/core";
import "./topbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Topbar = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <div className="topbarcontainer">
            <div className="topbarleft">
              <Link to="/" style={{ textDecoration: "none" }}>
                
                <span className="logo"><NaturePeople /> Vruskhvalli</span>
              </Link>
            </div>
            <div className="topbarcenter">
              <div className="searchbar">
                <Search className="searchIcon" />
                <input
                  placeholder="search for friend or place"
                  className="searchInput"
                />
              </div>
            </div>
            <div className="topbarright">
              <Link to={`profile/${user.username}`}>
                <img
                  src={user.profilePicture || PF + "person/noimg.png"}
                  className="postProfileImg"
                />
              </Link>
              <Link to={`profile/${user.username}`} style={{ textDecoration: "none" }}>
              <h1 className="postUserName">
                  {user.username}
              </h1>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Topbar;
