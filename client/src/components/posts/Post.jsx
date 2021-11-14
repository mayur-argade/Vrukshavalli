import { Paper, Button } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import "./post.css";
import axios from "axios"
import { format } from "timeago.js"
import {Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";


const Post = ({post}) => {  
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser } = useContext(AuthContext)
    const [plant, setPlant] = useState(post.todo.length)
    const [isPlant, setIsPlant] =useState(false)

    const [inputList, setInputList] = useState("")
    

    const todoHandler=()=>{
      try{
          axios.put("/posts/"+post._id+"/plant", {userId: currentUser._id})
      }catch{

      }
      setPlant(isPlant ? plant-1 : plant+1)
        setIsPlant(!isPlant)
    }

    useEffect(() => {
      setIsPlant(post.todo.includes(currentUser._id));
    }, [currentUser._id, post.todo]);




    const likeHandler=()=>{
      try{
          axios.put("/posts/"+post._id+"/like", {userId: currentUser._id})
      }catch{

      }
      
      setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    useEffect(() => {
      setIsLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes]);


    useEffect( ()=>{
      const fetchUser = async () => {
       const res = await axios.get(`/users?userId=${post.userId}`)
       setUser(res.data)
      };
  fetchUser();
  },[post.userId])
    
    return (
    <div className="post">
      <Paper elevation={6}>
        <div className="postwrapper">
          <div className="postTop">
            <div className="postTopLeft">
              
              <Link to={`profile/${user.username}`}>
              <img
                src={user.profilePicture ?PF + user.profilePicture : PF+"person/noimg.png"}
                className="postProfileImg"
              />
              </Link>

              <span className="postUserName">
                  {user.username}
              </span>
              <span className="date">{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>

          <div className="postcenter"></div>
          <span className="postText" >{post?.desc}</span>
          <img src={PF+ post.img} alt="" className="postImg" />
          
          <div className="postbottom">
              <div className="postBottomLeft">
                <img className="likeicon" src={`${PF}like.png`} onClick={likeHandler} />
                <span className="postlikecounter">{like}</span>
              </div>
              <div className="postBottomCenter">
              
              </div>

              <div className="postBottomRight">
                <div className="postCommentText">
                  
                <Button onClick={todoHandler} >{plant}</Button>
                <span>people wants to plant </span>
                </div>
              </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Post;
