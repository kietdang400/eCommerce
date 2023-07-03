import React from "react";
import {IconButton,Typography,useMediaQuery,Box } from '@mui/material';
import "./Footer.css"
import Logo from "../../img/ucdavis-logo-2.png"
const Footer=()=>{
    
    const isNonMobile=useMediaQuery("min-width(1000px)");

    return(
        <div className="footer-container">
            {isNonMobile?(
            <Footer>
                <Box>
                <div><h5>all rights reserved @UC Davis</h5></div>
                <h5>Peronsal Ecommerce Project</h5>

                <div sx={{width:"50%",height:"100px"}}>
                <img src={Logo} alt="University Logo" ></img>
                </div>

                {/*Provide link to github and provide date of when this project will be finished*/}
                </Box>
            </Footer>):
            <Footer>
                <Box>
                <div><h5>all rights reserved @UC Davis</h5></div>
                <h5>Peronsal Ecommerce Project</h5>
                <img src={Logo} alt="University Logo"></img>
                </Box>
            </Footer>}
        </div>
    )
}

export default Footer