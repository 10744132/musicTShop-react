import React from 'react'
import "./Contact.scss"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";


const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">

            <div className="title">Be in your touch with us: Bruce.Hsu</div>
            <div className="Email">
                <input type="text" placeholder='Enter your Email'/>
                <button className='button-49' role="button">Join Us </button>              
            </div>
            <div className="social">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <GoogleIcon />
                <PinterestIcon />
            </div>
        </div>
    </div>
  )
}

export default Contact