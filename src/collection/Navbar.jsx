 //import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar =()=>{
    
    
    return(
        <nav class="navbar navbar-expand-md navbar-dark bg-primary" style={{position:"sticky",top:"0px", zIndex:"50"}}>
        <div class="container " >
          <Link to={"/"}class="navbar-brand active " href="#"><strong style={{fontFamily:"Cookie",fontSize:"200%"}}> <b style={{color:"fuchsia"}}> ❤</b> Love Collections </strong></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav  mb-2 mb-sm-0  " style={{marginLeft:"50%"}}>
              <li class="nav-item">
                <Link  to ={"/produce"} class="nav-link nav-item "><span style={{fontFamily:"roboto",fontSize:"140%"}}>Product </span></Link>
              </li>
            
              <li class="nav-item">
                <Link to={"/about"} class="nav-link"> <span style={{fontFamily:"roboto",fontSize:"140%"}}>About </span></Link>
              </li>
            
              
              <li class="nav-item">
                <Link to={"/contact"} class="nav-link" href="#" ><span style={{fontFamily:"roboto",fontSize:"140%"}}>Contact</span></Link>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
    )
}
export default Navbar