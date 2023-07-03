import React from "react";
import {useMediaQuery,Box } from '@mui/material';
import "./Footer.css";
import Logo from "../../img/ucdavis-logo-2.png";
const Footer=()=>{
    
    const isNonMobile=useMediaQuery("(min-width:1000px)");

    return(
        <div className="footer-container">
            <footer>
            {isNonMobile?(
            
                <Box sx={{display:"flex",flexDirection:"column"}}>
                <div style={{marginLeft:"43%"}}>
                <div><h5>all rights reserved @UC Davis</h5></div>
                <h5>Peronsal Ecommerce Project</h5>
                <img src={Logo} alt="University Logo" style={{width:"5%",height:"50px"}}></img>
                </div>
                {/*Provide link to github and provide date of when this project will be finished*/}
                </Box>
         ):
           
                <Box sx={{display:"flex",flexDirection:"column"}}>
                    <div style={{marginLeft:"35%"}}>
                <div><h5>All rights reserved @UC Davis</h5></div>
                <h5>Peronsal Ecommerce Project</h5>
                <img src={Logo} alt="University Logo" style={{width:"18%",height:"50px"}}></img>
                </div>
                </Box>
            }
            </footer>
        </div>
    )
}

export default Footer