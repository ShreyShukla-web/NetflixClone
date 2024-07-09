// import { Container } from 'postcss';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../assets/logo.png";
import {FaPowerOff, FaSearch} from "react-icons/fa"
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
// import {navigate, useNavigate } from 'react-router-dom'

export default function Navbar({ isScrolled}) {
  
    const links = [
     { name: 'Home', link: '/'},
     { name: 'Tv Shows', link: '/tv'},
     { name: 'Movies', link: '/movies'},
     { name: 'My List', link: '/mylist'}  
    ]

    const [showSearch,setShowSearch] = useState(false); 
    const [inputHover, setInputHover] = useState(false);

    const navigate = useNavigate();

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
      if(!currentUser) navigate("/login");
  })

  return (
  <Container>
    <nav className={`flex ${isScrolled ? "scrolled": "" }`}>
      <div className="left flex a-center">
        <div className="brand flex a-center j-center">
          <img src={logo} alt="logo" />
        </div>
        <ul className="links flex">
          {
            links.map(({name,link})=>{
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="right flex a-center">
        <div className={`search ${showSearch? "show-search": "" }`}>
          <button onFocus={()=>setShowSearch(true)} onBlur={
            ()=>{
              if(!inputHover) setShowSearch(false);
            }} >
            <FaSearch/>
          </button>
          <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setInputHover(false);
                setShowSearch(false);
              }}/>
        </div>
        <button onClick={()=> signOut(firebaseAuth)}>
          <FaPowerOff/>
        </button>
      </div>



    </nav>
  </Container>
  )
}
const Container = styled.div`
.scrolled {
  background : black;
  
}
nav{
  position: sticky;
  top:0;
  height: 4.5rem;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  padding: 0 4rem;
  margin: auto;
  
  transition: 0.3s ease-in-out; 

  .left{
    gap:2rem;
    .brand{
      img{
        height: 3.5rem;
      }
    }
   
.links{
  list-style-type: none;
  gap: 2rem;
 
  li{
    a{
      text-decoration: none;
      color: white;
    }
  }
}
}
.right{
  gap:1rem;
  button{
    background-color: transparent;
    border:none;
    cursor: pointer;
    &:focus{
      outline: none;
    }
    svg{
      color: #d92419;
      font-size: 1.2rem;
    }
    }
    .search{
      display: flex;
      gap: 0.4rem;
      align-items: center;
      justify-content: center;
      padding: 0.2rem;
      padding-left: 0.5rem;
      button{
        // background-color: black;
        svg{
          color:white;
  
        }
      }
  input{
    width: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
    background-color: transparent;
    border:none;
    color: white;
    &:focus {
      outline: none;
    }
  
  }
    }
  .show-search{
    border: 1px solid white;
    background-color: rgba(0,0,0,0.6);
    input{
      width: 100%;
      opacity:1;
      visibility: visible;
      padding: 0.3rem;
    }
  }
}
`;

