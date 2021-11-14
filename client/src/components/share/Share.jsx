import "./share.css"
import { Paper, Button } from "@material-ui/core"
import { PermMedia } from "@material-ui/icons"
import { useContext , useRef, useState} from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import { Cancel } from "@mui/icons-material"

const Share = () => {

    const { user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER ;
    const desc = useRef()
    const [file, setFile] = useState(null)

    const submitHandler= async (e) =>{
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            console.log(newPost);
            try {
              await axios.post("/upload", data);
            } catch (err) {}
          }
          try {
            await axios.post("/posts", newPost);
            window.location.reload();
          } catch (err) {}
        

    }

    return (
        <Paper elevation={6}>
        <div className="share">
            <div className="sharewrapper">
                <div className="sharetop">
                    <img className="shareprofilepic" src={user.profilePicture ?PF + user.profilePicture : PF+"person/noimg.png"} alt="" />
                    <input placeholder="Where you found place to plant tree  ?" className="shareInput" ref={desc} />
                </div>
                <hr className="shareHr"/>

                {file && (
                    <div className="shareimgcontainer">
                        <img src={URL.createObjectURL(file)} className="shareimg"  alt="" />
                        <Cancel className="shareCancel" onClick ={()=> setFile(null)} />
                    </div>
                )}

                <form className="sharebottom"  onSubmit={submitHandler}>
                    <div className="shareoptions">
                    <label htmlFor="file" className="shareoption">
                        <PermMedia className="shareIcon" />
                        <span className="shareOptionText">photo/video</span>
                        <input style={{display:"none"}} type="file" id="file" accept="png,.jpeg,.jpg" onChange={ (e)=> setFile(e.target.files[0]) } />
                    </label>
                    <div className="sharebutton">
                        <Button variant="contained" color="secondary" className="shareButton" type="submit">Share</Button>
                    </div>
                    </div> 
                </form>
            </div>
        </div>
        </Paper>        
    )
}

export default Share
