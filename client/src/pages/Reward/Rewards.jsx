import './rewards.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Rewards = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <div className="reward">
            <div className="rewardTitle">
                        HELLO!
                    </div>
                <div className="rewardwrapper">

                    <div className="rewardText">
                        We will notify you when you will get any Reward.
                    </div>
                    <div className="rewardImg">
                        <img src={ PF+"rewards.png"} alt="reward" />
                    </div>
                </div>
                <Link to="/" style={{ textDecoration: "none" }}>
                        <Button variant="contained" >Back to Homepage</Button>
                </Link>
            </div>
        </div>
    )
}

export default Rewards
