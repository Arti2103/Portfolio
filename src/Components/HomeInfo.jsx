import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'



const InfoBox = ({ text, link,btnText})=>(
    <div className='info-box'>
     <p className='font-medium sm:text-xl text-center'>{text}</p>
     <Link to ={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
     </Link>
    </div>
)

const renderContent ={
    1: (<h1 className='sm:text-xl sm:leading-snug text-center
    neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Arti</span>👋
    <br/>
    
    "Dynamic, user-centric web creator."
    </h1>
    ),
    2: (
        <InfoBox 
        text="Successfully completed a transformative summer internship training program, mastering the art of web development and honing skills to build innovative solutions with flair."
        link='/about'
        btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
        text="Steered academic triumphs, orchestrating project success with finesse. Strong in project management and creative problem-solving."
        link='/projects'
        btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
        text=" Need a project done or looking for a dev ? I'm just a few keystrokes away "
        link='/contact'
        btnText="Let's talk"
        />
    ),
   
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo