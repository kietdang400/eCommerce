import {useState} from "react";
import {IconButton,Box,useMediaQuery,ToggleButton} from '@mui/material';
import{AlignHorizontalLeft, ShoppingBag, Close, Home, AccountCircle} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import  "./Navbar.css";
import Logo from "../../img/cow_logo-removebg-preview.png";



const Navbar =()=>{
const navigate = useNavigate();
const isNonMobile=useMediaQuery("(min-width:1000px)");
const [toggleNav,setToggleNav]=useState(false);

    return(
        <div className="navbar-container">
   
 {isNonMobile?(
//Desktop View


  <Box sx={{display:"flex", justifyContent:"center"}}>

<Box sx={{display:"flex", justifyContent:"left", paddingRight:"35%"}}>
<IconButton size="small" sx={{width:"35%", "&hover":{backgroundColor:"#1976d2"}}}  disableRipple disableFocusRipple onClick={()=>{navigate("/")}}>
    {/* Need to adjust width and height of logo for responsiveness*/}
    <img style={{width:"55%"}} src={Logo} alt="UC Davis Logo"></img>
</IconButton>
</Box>

<IconButton sx={{color:'text.primary',  paddingRight:"2%"}} disableRipple disableFocusRipple onClick={()=>{navigate("/")}}>
   <Home sx={{color:"#9370db",fontSize:"2rem"}}></Home>
</IconButton>

<IconButton sx={{color:'text.primary', paddingRight:"2%"}} disableRipple disableFocusRipple onClick={()=>{navigate("/cart")}}>
   <ShoppingBag sx={{color:"#9370db",fontSize:"2rem"}}></ShoppingBag>
</IconButton>

<IconButton sx={{color:'text.primary',  paddingRight:"2%"}} disableRipple disableFocusRipple onClick={()=>{navigate("/login")}}>
    <AccountCircle sx={{color:"#9370db",fontSize:"2rem"}}></AccountCircle>
</IconButton>

</Box>
 ):(

//Mobile View

    <Box sx={{display:"flex", justifyContent:"center"}}>

<Box sx={{display:"flex",justifyContent:"center", paddingRight:"35%" }}>
<IconButton size="small" sx={{width:"35%"}} disableRipple disableFocusRipple onClick={()=>{navigate("/")}}>
    {/* Need to adjust width and height of logo for responsiveness*/}
    <img style={{width:"180%"}} src={Logo} alt="UC Davis Logo"></img>
</IconButton>
</Box>

<Box sx={{display:"flex", flexDirection:"column"}}>
<ToggleButton value="web" onClick={()=>{setToggleNav(!toggleNav)}}><AlignHorizontalLeft></AlignHorizontalLeft></ToggleButton>

{toggleNav&&(
<Box sx={
    {position:"absolute", 
    display:"flex", 
    flexDirection:"column", 
    backgroundColor:"#87ceeb", 
  
    marginTop:"34%",
    marginLeft:"-40.5%",
    padding:"5%",
    width:"50%",
    height:"100%"
}
    }>

<IconButton sx={{marginBottom:"15%"}} onClick={()=>{setToggleNav(false)}}><Close sx={{color:"red"}}></Close></IconButton>

<IconButton sx={{color:'text.primary', marginBottom:"15%",borderRadius:"0px"}}  onClick={()=>{navigate("/")}}>
    <Home sx={{color:"#9370db",fontSize:"2rem"}}></Home>
</IconButton>

<IconButton sx={{color:'text.primary' , marginBottom:"15%",borderRadius:"0px"}}  onClick={()=>{navigate("/cart")}}>
   <ShoppingBag sx={{color:"#9370db",fontSize:"2rem"}}></ShoppingBag>
</IconButton>

<IconButton sx={{color:'text.primary' , marginBottom:"15%",borderRadius:"0px"}}  onClick={()=>{navigate("/login")}}>
 <AccountCircle sx={{color:"#9370db",fontSize:"2rem"}}></AccountCircle>
</IconButton>
</Box>
)
}
</Box>
</Box>
 )}
   

        </div>
    )
}

export default Navbar;