import React, {useState} from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from "react-icons/bs"
import video from '../assets/video.mp4';
import { useNavigate } from 'react-router-dom';

export default function Player() {
    const navigate = useNavigate();
    const [showArrow, setShowArrow] = useState(true);
    let timeout;
  
    const handleMouseMove = () => {
      setShowArrow(true);
      clearTimeout(timeout);
  
      timeout = setTimeout(() => {
        setShowArrow(false);
      }, 3000); // Hide the arrow icon after 2 seconds of inactivity
    };
      return (
   
    <Container>
      <div className="player">
        
        <div  className="back" onMouseMove={handleMouseMove}>
        {showArrow && <BsArrowLeft onClick={() => navigate(-1)}  className={showArrow? 'arrow show' : 'arrow hide'} />}
        {<video className="video" src={video} autoPlay loop controls muted></video>}
    </div>
    
        </div>
    </Container>
  )
}
const Container = styled.div`
.player{
  width:100vw;
  height: 100vh;
  
  .video{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}


.arrow {
  position: absolute;
  font-size: 2rem;
  top: 5%;
  left: 4%;
  transform: translate(-50%, -50%);
  transition: opacity 0.544s ease;
  // position: absolute;
  // padding: 2rem;
  z-index: 1;
  cursor: pointer;
}

.arrow.show {
  opacity: 1;
}

.arrow.hide {
  opacity: 0;
}
 `