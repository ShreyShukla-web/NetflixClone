import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';


export default function Login()
{
    const navigate = useNavigate();
    
    // State for holding user input values. 
    const[formValues, setFormValues] = useState({
        email: "",
        password: "",
    })

    const handleLogin = async ()=>{
        try{
            const {email,password} = formValues;
            await signInWithEmailAndPassword( firebaseAuth,email, password);
        }
        catch(err){
            console.log(err);
        }
    }

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser) navigate("/Netflix");
    })

  return (
    
    <Container>
        <BackgroundImage/>
        <div className="content">
            <Header/>
            <div className="form-container flex column a-center j-center">
            <div className="title">
                    <h3>Sign In</h3>
                </div>
            <div className="flex column a-center j-center">
                
                <conatiner className="form flex column">
                     <input type="email" name="email" placeholder='Email or mobile number' values = {formValues.email} 
                        onChange = {(e)=>setFormValues({...formValues, [e.target.name]:e.target.value})} />
                    <input type="password" name="password" placeholder="Password" values={formValues.password}
                        onChange = {(e)=>setFormValues({...formValues, [e.target.name]:e.target.value})}/>
                    <button onClick={handleLogin}>Log In</button>
              
                </conatiner>
                   
            </div>
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
    .form-container{
        gap :2rem;
        height: 85vh
    }
        .form{
            padding: 2rem ;
            background-color: rgba(0, 0, 0, 0.7);
            width: 25vw;
            gap: 1rem;
            color: white;

             }     .conatiner{
                    gap: 2rem;
             }
                    input{
                        padding: 1rem 1rem;
                        // background: transparent;
                        // width: 15rem;
                        background: #0c0b0be6;
                        border-radius: 0.3rem;
                        font-size: 1.05rem;
                        border: 1px solid #615858;
                        color: white;
                         }
        
        button{
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            font-weight: bolder;
            border-radius: 0.2rem;
            font-size: 1.05rem;
            }
        
 `;







//  .body{
//     gap: 1rem;
//     .text{
//         gap: 1rem;
//         text-align : center;
//         // font-size: 2rem;
//         h1{
//             // padding: 0 25rem;
//             font-size: 3rem;
//         font-weight: 900;
//         }
//         p{
//             font-size: 1.5rem;
//             font-weight: 400;
//         }
       
//         }
//     }
//     .form{
       
//         h3{
//             font-size: 1.25rem;
//             font-weight: 400;
//             line-height: 1.5;
//     }
//     input{
//         color : white;
//         background-color :#07080880;
//         border: none;
//         padding: 1.5rem;
//         font-size: 1.2rem;
//         border: 1px solid black;
//         &:focus {outline:none;}
//     }
       
//         button{
//             padding: 0.5rem 1rem;
//             background-color: #e50914;
//             border: none;
//             cursor: pointer;
//             color: white;
//             // border-radius: 0.2rem;
//             font-weight: bolder;
//             font-size : 1.05rem;
//         }
//     }
//     button{
//         padding: 0.5rem 1rem;
//         background-color: #e50914;
//         border: none;
//         cursor: pointer;
//         color: white;
//         border-radius: 0.2rem;
//         font-weight: bolder;
//         font-size : 1.05rem;
//     }
// }
