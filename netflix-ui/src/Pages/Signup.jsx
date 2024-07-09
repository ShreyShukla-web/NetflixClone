import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
// import Container from 'postcss/lib/container'


export default function Signup()
{
    const navigate = useNavigate();
    
    // State for holding user input values. 
    const [showpassword, setshowpassword] = useState(false);
    const[formValues, setFormValues] = useState({
        email: "",
        password: "",
    })

    const handleSignIn = async ()=>{
        try{
            const {email,password} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
        }
        catch(err){
            console.log(err);
        }
    }

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser) navigate("/Netflix");
    })

  return (
    
    <Container showpassword ={showpassword}>
        <BackgroundImage/>
        
        <div className="content">
        <Header/>
        <div className='body flex column a-center j-center bg-color-black'>
            <div className='text flex column'>
                <h1>Unlimited movies, TV shows and more</h1>
                <p>Watch anywhere. Cancel anytime</p>
                <h3>Ready to watch? Enter  your email to create or restart your membership.</h3>

            </div>

            <div className="form">

                <input 
                type="email" 
                name="email" placeholder='Email or mobile number' 
                values = {formValues.email} 
                onChange = {(e)=>setFormValues({...formValues, [e.target.name]:e.target.value})} />
               
               {showpassword && (
               <input
                type="password"
                name="password" placeholder="Password" 
                values={formValues.password}
                onChange = {(e)=>setFormValues({...formValues, [e.target.name]:e.target.value})}/>)}

                {!showpassword && (<button onClick={()=> setshowpassword(true)}>Get  Started</button>)}
            </div>   
            <button onClick={()=>handleSignIn()}>Sign In</button> 
        </div>
        </div>
        

        </Container>
  )
}

const Container = styled.div`
position: relative;
.content{
    position:absolute;
    top:0%;
    left:0%;
    background-color : rgba(0,0,0,0.5);
    width:100vw;
    height:100vh;
    display : grid;
    grid-template-rows: 15vh 85vh;    
}
.body{
    gap: 1rem;
    .text{
        gap: 1rem;
        text-align : center;
        // font-size: 2rem;
        h1{
            // padding: 0 25rem;
            font-size: 3rem;
        font-weight: 900;
        }
        p{
            font-size: 1.5rem;
                    font-weight: 400;
        }
       
        }
    }
    .form{
        display : grid;
        grid-template-columns: ${({showpassword})=>showpassword ? "1fr 1fr" : "2fr 1fr"} ;
        width: 60%;
        h3{
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 1.5;
    }
        input{
            color : white;
            background-color :#07080880;
            border: none;
            padding: 1.5rem;
            font-size: 1.2rem;
            border: 1px solid black;
            &:focus {outline:none;}
        }
        button{
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            // border-radius: 0.2rem;
            font-weight: bolder;
            font-size : 1.05rem;
        }
    }
    button{
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size : 1.05rem;
    }
}
 `;
