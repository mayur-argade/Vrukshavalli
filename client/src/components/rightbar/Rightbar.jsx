import { useContext, useEffect, useState } from "react";
import "./rightbar.css"
import {AuthContext} from '../../context/AuthContext'
import { Add, Remove } from "@material-ui/icons";
import axios from "axios";
import { Stack, Divider } from "@mui/material";

const Rightbar = ({user}) => {

const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );


  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const HomeRightbar=()=>{
    return(
        <>
        <Stack className="rightbarwrapper">

        <span>Ads</span>
          
            <img src={ PF+"posts/img1.jpg"}className="rightbarimg" alt="" />
          
          
          
            <img src={ PF+"posts/img2.jpg"} className="rightbarimg" alt="" />
          

          
            <img src={ PF+"posts/img3.jpg"} className="rightbarimg" alt="" />
          

          
            <img src={ PF+"posts/img4.jpg"} className="rightbarimg" alt="" />
          

          
            <img src={ PF+"posts/img5.jpg"} className="rightbarimg" alt="" />
          

          
            <img src={ PF+"posts/img6.jpg"} className="rightbarimg" alt="" />
          
        
       
        </Stack>

        
        </>
    );
};

const ProfileRightbar =() =>{
    return (
    
        <>
        {user.username !==currentUser.username && (
            <button className="followbutton" onClick={handleClick}>
               {followed ? "Unfollow" : "Follow" }
               {followed ? <Remove /> : <Add />}
            </button>
        )}
        <h4 className="rightbarTitle"> User Information</h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City: </span>
                <span className="rightbarInfoKey">{user.city}</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Birthdate:</span>
                <span className="rightbarInfoKey">{user.birthdate}</span>
            </div>
        </div>
        </>

       )
}
    return (
        <div className="rightbar">
        <div className="rightbarwrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar /> }
        </div>       
        </div>
    )
}

export default Rightbar
