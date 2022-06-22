
// import { Link } from "react-router-dom"

import { useState } from "react";

// import './Connect.css';
const Connect =() => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [incorrect, setIncorrect] = useState('');

 //  const [, setSumbit] = useState('');

   const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const cool = () => {
    return (
      <div 
        className="success text-center"
        style={{
          display: incorrect?'' : 'none',color:"red"
        }}>
        <p >please enter a correct email</p>
      </div>
    ); 
  };
 



   const successMessage = () => {
      return (
        <div 
          className="success"
          style={{
            display: submitted?'' : 'none',
           color:"green"}}>
          <strong> ✔ SUCCESSFULLY SENT</strong>
        </div>
      );
    };
   
     
     // Showing error message if error is true
     const errorMessage = () => {
      return (
        <div
          className="error"
          style={{
            display: error ? '' : 'none',
          }}>
          <h1>Please enter a correct email</h1>
        </div>
      );
    };

  const  submit = (e) => {
    e.preventDefault()
    
    if (email === ""){
     setIncorrect("pls insert your email")

      return
    }
    if (name === ""){
      setIncorrect("pls insert your name")
 
       return
     }
     if (number === ""){
      setIncorrect("pls insert your phone")
 
       return
     }
    
 

    let data = {email,subject,textarea,number,name}
  console.log(data)
      fetch("http://localhost:4050/register", {


        method:"POST",
        headers:{
          "content-Type": "application/json"
        },
        
        body:JSON.stringify(data)
      }).then(res => res.json())
      .then(data => {
      //  if (subscribe)  {
      //   setSubmitted(false)
      //  }
      //  else  {
      // setError(true)
      //  }
         console.log(data)
         setSubmitted(data);
         setError(false);
       })
     
  }
  
    return(
        <>
        <div className="">
        <h2 className="text-center mt-5">CONTACT US</h2>
        <p className="text-center "> Enreach us for more product</p>
        <main class="parent">

<div  class="child pt-3" style={{boxShadow: "3px 4px 6px silver"}}>
<div style={{margin:"8px"}}>  <i class="fa fa-whatsapp" aria-hidden="true"style={{fontSize:"40px",color:"limegreen"}}> </i></div>
  <div style={{margin:"5px"}}>
<strong style={{fontSize:"120%"}}>Chat us:</strong>
<a href="https://wa.me/08100038297" style={{textDecoration:"none",fontWeight:"bold",color:"limegreen" }}><p className="pt-1"> Whatsapp</p> </a>
</div>
</div>
<div  class="child pt-3 " style={{boxShadow: "3px 4px 6px silver"}}>
<div style={{margin:"8px"}}>  <i class="fa fa-phone " aria-hidden="true"style={{fontSize:"40px",color:"green"}}> </i></div>
  <div  style={{margin:"5px"}}> 
    <strong style={{fontSize:"120%"}}>Call us:</strong>
<p className="pt-1">08100038297</p>
</div>
</div>
<div class="child p-3 " style={{boxShadow: "3px 4px 6px silver"}}>
<div style={{margin:"8px"}}>  <i class="fa fa-envelope text-primary" aria-hidden="true"style={{fontSize:"42px"}}> </i></div>
  <div style={{margin:"5px"}}>
  <strong style={{fontSize:"120%"}}>Mail Us</strong>
  <p className="pt-1">ifeoluwajojolola@gmail.com</p>
  </div>
  </div>
</main>
</div>

<form action="">

  <div  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginLeft:"12%",width:"60%"}}>
 
    <div style={{margin:"20px"}}>
  <input type="text" name="name" id="name" placeholder="Your Name" style={{width:"160%",padding:"10px"}} onChange={(e)=> { setName(e.target.value)}} required />
  </div>
  <div style={{margin:"20px"}}>

  <input type="email"  name="username" id="email2" placeholder="Your email" style={{width:"160%",padding:"10px" }} 
   onChange={(e)=> { setEmail(e.target.value)}} required/> 
   
  </div>
 
  </div>
  <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginLeft:"12%",width:"60%"}}>
    <div style={{margin:"20px"}}>
  <input type="number" name="number" id="number" placeholder="Your Number" style={{width:"160%",padding:"10px"}} onChange={(e)=> { setNumber(e.target.value)}} required/>
  </div>
  <div style={{margin:"20px"}}>
  <input type="text"  name="subject" id="subject" placeholder="topic" style={{width:"160%",padding:"10px"}} onChange={(e)=> { setSubject(e.target.value)}} required /> 
  </div>
  </div>
<div style={{width:"60%",margin:"auto"}}>
  <textarea name="textarea" id="textarea" style={{width:"100%",height:"150px",padding:"12px 20px", boxSizing:"border-box",
  borderRadius:"4px",border:"2px solid #ccc",backgroundColor:"#f8f8f8",fontSize:"16px",resize:"none"}} placeholder="how can we help you"  onChange={(e)=> { setTextarea(e.target.value)}}>
    
  </textarea>
  </div>
  <div className="text-center">
  <button className="btn btn-primary p-2 " onClick={submit}><b> Submit</b></button>
 
       <div className="messages">
       {errorMessage()}
        {successMessage()}
      </div>
       </div>
  
</form>

      </>
    )
}
export default Connect