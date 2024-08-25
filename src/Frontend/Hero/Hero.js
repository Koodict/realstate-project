import React from 'react'
import { motion } from 'framer-motion'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import './Hero.css'

export default function Hero() {


  return (

<>

    <div className="background-container">
        <div className="hero-wrapper">

    <div className="paddings innerWidth flexCenter hero-container">

<div className="flexColStart hero-left">
  <div className="hero-title">
    <div className="orange-circle"/>

    
    <motion.h1 initial={{y:'2rem' , opacity:0,}}animate={{y:0 , opacity:1}}
    transition={{duration:2, type:'spring'}}>Search<br />for the Perfect <br /> Residence </motion.h1>
  </div>

<div className="flexColStart hero-des">
<span className='secondaryText'>Discover a Range of Properties Suited to Your Needs with Ease</span>
<span className='secondaryText'>Find the Ideal Property to Suit Your Preferences Without Any Hassles</span>
</div>

<div className=" flexCenter d-none d-sm-flex  search-bar">
<HiLocationMarker  className='text-warning' size={25} />
<input type="text" className='inputWidth'/>
<button className='btn  btn-warning'>Search</button>
</div>

<div className="flexCenter stats">

<div className="flexColCenter stat">
    <span>
  <CountUp start={8800} end={9000} duration={4}/>
  <span>+</span>
</span>
<span className='secondaryText text-warning'>Top-Tier Products</span>
</div>

<div className="flexColCenter stat">
<span>
  <CountUp start={1950} end={2000} duration={4}/>
  <span>+</span>
</span>
<span className='secondaryText text-warning'>Satisfied Clients</span>
</div>
<div className="flexColCenter stat">
<span>
  <CountUp  end={28} />
  <span>+</span>
</span>
<span className='secondaryText text-warning'>Award Winning</span>
</div>
</div>
</div>





    </div>
    
    </div>
    
    </div>
    </>


  )
}
