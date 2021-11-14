import './error.css'
import { Button } from '@mui/material';
import {Link} from 'react-router-dom'

const Error = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
           <div className="error">
            <div className="errorTitle">
                        OOPS!
                    </div>
                <div className="errorwrapper">
                    <div className="errorText">
                        Page in under maintainance.
                    </div>
                    <div className="button">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Button variant="contained" >Back to Homepage</Button>
                    </Link>
                    </div>
                    <div className="errorImg">
                        <img src={ PF+"404error.gif"} alt="error" />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Error
