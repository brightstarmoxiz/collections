import { Link } from "react-router-dom"

import perfs from "./p.jpeg"
import pro from "./pro.jpg"
import pro2 from "./pro2.jpeg"
import pro3 from "./pro3.jpg"

const About =()=>{
    return(
        <>
<div style={{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:`url(${perfs})`}}>
    <div style={{width:"100%",backgroundColor:"rgba(0,0,0,0.680)",color:"white",textAlign:"center"}}> <strong style={{fontSize:"50px"}}> About My Product
    </strong>
    <div style={{width:"80%",margin:"auto",fontSize:"110%"}}><p>Love Colletions is platform whereby we sell different type of product at affordable price, it is an everlasting product. we sell <b>Underwears, Lingeries,T-shirts,Perfumes etc.</b> we sell quality product at cheaper price. </p>
    <p>These Product gives body hygiene, make feel  you good and nice in your enviroment. when you buy more you pay less, there are Gift to be given to all customers that buy more of our product </p>
    <p>Many Customers have buy this product and enjoy the use of it. Buy this product and enjoy it everlasting use. </p>
    <p>You are recommmended to buy any of our produce at affordeble price.</p>
   
    </div>
    
    <h1 style={{marginBottom:"0px"}}>Feedback from our customer</h1>
    </div>
    </div>
    <div  style={{backgroundColor:"rgba(0,0,0,0.900)",color:"white",textAlign:"center"}}>
    
    <div class="container w-100 pt-2 ">

      
         < div class="row">
 
    
  
  <div class="col-sm-4">
  <div style={{height:"25vh",overflowY:"hidden",textAlign:"center"}}>
    <img  style={{width:"60%"}} src={pro} alt="under2" />
    </div>
    <div style={{paddingTop:"3%"}}>
      <div> <strong> Eniola </strong>
      <p>Love Collection is a platform that sell quallity product. </p></div>
    
    </div>
    </div>
  
  <div class="col-sm-4">
  <div style={{height:"25vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"70%"}} src={pro2} alt="under3" />
    </div>
    <div style={{display:"flex", justifyContent:"space-around",paddingTop:"3%"}}>
      <div> <strong> MR John</strong>
      <p>Wow, i just bought a perfume from Love Collection is smelling nice.</p></div>
     
    </div>
  </div>
  <div class="col-sm-4">
  <div style={{height:"25vh",overflowY:"hidden",textAlign:"center"}}>
    <img style={{width:"58%"}} src={pro3} alt="under4" />
    </div>
    <div style={{display:"flex", justifyContent:"space-around",paddingTop:"3%"}}>
      <div> <strong> Damilola</strong>
      <p>What a quality product, Love Collection is product is the best.</p></div>
     
    </div>
  </div>
  
</div>
</div>
<div >
    <strong>Buy our product now and enjoy it quailty</strong>

    <p>You can also contact us by clicking the bottton below</p>
   <Link to={"/contact"}> <button className="btn btn-primary">Contact Us</button> </Link>
    </div>

   </div>

</>
    )
}
export default About