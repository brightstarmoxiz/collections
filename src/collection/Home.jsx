import { Link } from "react-router-dom"
import Connect from "./Connect"
import perfume from "./perfume-removebg-preview.png"
import per1 from "./perfume1.jpg"
import per2 from "./sweet2.JPG"
import per3 from "./sweet5.JPG"
import per4 from "./sweet3.JPG"
import per5 from "./sweet1.JPG"
import lin from "./lingeries.jpg"
import lin2 from "./lingeries2.jpg"
import lin3 from "./lingeries3.jpg"
import lin4 from "./lingeries4.jpg"
import lin5 from "./lingeries5.jpg"
import lin6 from "./lingeries6.jpg"
import mist1 from "./mist1.JPG"
import mist2 from "./mist2.JPG"
import mist3 from "./mist3.JPG"
import mist4 from "./mist4.JPG"
import mist5 from "./mist5.JPG"
import tor1 from "./tortle1.JPG"
import tor2 from "./tortle2.JPG"
import tor3 from "./tortle3.JPG"
import tor4 from "./tortle4.JPG"
import tor5 from "./tortle5.JPG"
import tor6 from "./tortle6.JPG"
import video from "./video.mp4"
import Footer from "./Footer"

const Home =() =>{
    return(
       
        <>
        <div style={{width:"100%",padding:"0%",backgroundColor:"pink"}}>
        <div class="container-fluid mt-0">
  <div class="row">
    <div class=" col-sm-6 text-primary text-center  " style={{marginTop:"15%"}}>
    <strong style={{fontSize:"280%",fontFamily:"pacifico"}}> Welcome to <i> LOVE COLLECTIONS </i></strong>
    <p style={{fontSize:"180%",fontFamily:"verdana"}}>Elegance with fragrance</p>
    </div>
    <div class="col-sm-6  pt-0">
     <img style={{width:"100%"}} src={perfume} alt="this is data" />
    </div>
   
  </div>
</div>
        </div>
        <div class="container mt-4">
    <div class=" text-primary text-center  " >
    <h2  style={{fontFamily:"roboto",fontWeight:"bolder"}}>We have the best service for you</h2>
    <strong style={{fontSize:"210%",fontFamily:"roboto"}}><i> Love Collections is a site where we sell different type of body care and underwears </i></strong>
    <p style={{fontSize:"140%",fontFamily:"roboto"}}>come and buy at affordable prize</p>
    </div>
  </div>
  
{/* row and colum of lingeries*/}
  <div class="container-fluid pt-3" style={{backgroundColor:"pin"}}>
  <div class="row" >
    <div class=" col-sm-3  text-center "  >
      
      <div id="carouselExampleFade" class="carousel slide carousel-fade " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:"25vh",overflowY:"hidden"}}>
    
      <img src={lin} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" style={{height:"25vh",overflowY:"hidden"}}>
      <img src={lin2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={lin3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={lin5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={lin4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={lin6} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
     <div>
      <strong className="text-primary " style={{fontSize:"200%",fontFamily:"verdana"}}>Lingeries</strong>
    </div>
    </div>
    {/* perfum */}
    <div class="col-sm-3 text-center " >
    <div id="carouselExampleFade" class="carousel slide carousel-fade " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:"25vh",overflowY:"hidden"}}>
    
      <img src={per1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" style={{height:"25vh",overflowY:"hidden"}}>
      <img src={per2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={per3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={per5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={per4} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <div>
      <strong className="text-primary" style={{fontSize:"200%",fontFamily:"verdana"}}>Perfume oil</strong>
    </div>
    </div>

    {/* Mist */}

    <div class="col-sm-3 text-center">
    <div id="carouselExampleFade" class="carousel slide carousel-fade " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:"25vh",overflowY:"hidden"}}>
    
      <img src={mist3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" style={{height:"25vh",overflowY:"hidden"}}>
      <img src={mist2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={mist1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={mist5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={mist4} class="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     <div>
      <strong className="text-primary" style={{fontSize:"200%",fontFamily:"verdana"}}>Body Mist</strong>
    </div>
    </div>

{/* tortle */}

    <div class="col-sm-3 text-center">
    <div id="carouselExampleFade" class="carousel slide carousel-fade " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:"25vh",overflowY:"hidden"}}>
    
      <img src={tor1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" style={{height:"25vh",overflowY:"hidden"}}>
      <img src={tor3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={tor2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={tor5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={tor4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"style={{height:"25vh",overflowY:"hidden"}}>
      <img src={tor6} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     <div>
      <strong className="text-primary" style={{fontSize:"200%",fontFamily:"verdana"}}>Tortle neck</strong>
    </div>
    </div>
  </div>
</div >
{/* <div style={{marginTop:"2%", display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}} >
 
  
</div> */}
<div class=" card mx-auto mt-3 " style={{width:"55%",border:"none",fontSize:"130%",fontFamily:"verdana"}} >
<div className="w-100">
  <span style={{fontSize:"150%", marginLeft:"20%"}}>for more product click on the button</span>
  </div>
  <div class="card-body">
  <div className="w-100 text-center">
<Link to={"/produce"}>
<button className=" bt btn pb-1"><b>see more ...</b></button>
</Link>
</div>
  </div>
  </div>
  <div class="text-center" style={{width:"100%", textAlign:"center"}}>
    <div style={{width:"100%"}}>
  <video  autoPlay='true' loop muted style={{width:"50%"}}
     id="myVideo" 
         src={video} type="video/mp4">
    </video>
    </div>
    </div>

  <div class="container text-center" style={{fontFamily:"roboto"}}>
  <h1>About</h1>
  <p style={{fontFamily:"roboto",fontSize:"130%"}}>Love Collection product gives body hygiene, make you look nice among friends and family, when using this produce you will always look like the best, cute and beauty. </p>
  <p  style={{fontFamily:"roboto",fontSize:"130%"}}>Our product is best product ever, is affordable to buy. when using our product you will never regrate because is appreciative to use. <b>USE OUR PRODUCT AND SMILE</b> </p>
   <Link to={"/about"}><button className="btn btn-info text-light">see more</button></Link>
</div>
 <Connect/>
 <Footer/>

        </>
    )
}
export default Home