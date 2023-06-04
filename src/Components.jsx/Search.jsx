import React from 'react';

import {FaSearch} from 'react-icons/fa';
import styled from 'styled-components';
import{useState} from 'react';
import {useNavigate} from 'react-router-dom';
function Search() {
    const [input,setInput]=useState("");
    const navigate=useNavigate();
    const submitHandler=(e)=>{
    e.preventDefault();
    navigate("/searched/" + input);
    };
  return (
    <>
    <DesForm onSubmit={submitHandler}>
        <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} placeholder='Search...'/>
        
    </DesForm>
    <Desimg>
    <FaSearch/>
    </Desimg>
    </>
  );
}
const DesForm=styled.form`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;

input{
    position:relative;
    border:none;
    background-color:black;
    color:white;
    padding:1rem 3rem;
    outline:none;
    font-size:1.5rem;
    border-radius:1rem;
    cursor:text;
}


`;
const Desimg=styled.div`

     
    color:white;
    position:absolute;
    top:25%;
    left:38%;
 
 
`;
export default Search;
