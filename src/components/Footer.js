import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Telegram from "@mui/icons-material/Telegram"
import "../components/Footer.css";

function Footer(){   
 return (  
<footer>
   
        <div className="footer">
        <div className="SocialMedia">
       <InstagramIcon /><Facebook /><Twitter /><Telegram />
       <p>&copy; 2022 edward</p>
        </div>
        </div>
    
    </footer>
    
  )
}

export default Footer
