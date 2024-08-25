import React from 'react'
import {BsFillStarFill} from 'react-icons/bs'

import './Footer.css'

export default function Footer() {


  return (
    <>
    

    
    <footer className=" py-5">


<div className="container " >
  <div className="row">
    
  <div className="col  col-md-3 col-sm-6">
          <img src="./logo.png" width={50} alt="" />
          <strong className='fs-2'>OODICT</strong>
          <br />
    <p >This is Truly a spectacular <br />theme The custom page <br />builder is definitly</p>
<br/>
<img src="./pay.png" alt="" className='mb-5 mb-md-0' />


</div>
    <div className="col col-md-2 col-sm-6">
      
      <strong>Company</strong>
      <br/>
    <br />
      <p>Home</p>
      <br />
      <p>Pricing</p>
      <br/>
      <p>About</p>

     </div>


     <div className="col col-md-2 col-6  ">
     

       <strong>Connect</strong>
       <br/><br />
       <p >Our Community</p>
       <br/>
       <p >Facebook</p>
       <br/>
       <p >Blog</p>
       <br/>
    <p>Contact US</p>
      
      </div>
      
      <div className="col col-md-2 col-6  ">
       
        
      

         <strong>Experts</strong>
         <br/><br />
         <p >Apply as an Expert</p>
         <br/>
         <p>Vetting Guidelines</p>
         <br/>
         <p>Expert Sign In</p>
        
        </div>
        
           
      <div className="col col-md-2 col-6  mt-4">
       
        <BsFillStarFill className='text-warning ms-2'/>
        <BsFillStarFill className='text-warning ms-2'/>
        <BsFillStarFill className='text-warning ms-2'/>
        <BsFillStarFill className='text-warning ms-2'/>
        <BsFillStarFill className='text-warning ms-2'/>
<p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur suscipit vel </p>
      </div>

    </div>
    </div>
  </footer>
    </>
  )
}
