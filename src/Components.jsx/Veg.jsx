import React from 'react';
import{useEffect,useState}from'react';
import styled from "styled-components";
import {Splide,SplideSlide} from"@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';
function Veg() {
  const[veg,setVeg]=useState([]);
  useEffect(()=>{
    getVeg();
    },[]);
  const getVeg=async()=>{
    const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=4787e261d7714ec89a5c6780eddf51fc&number=9`);
    const data=await api.json();
    setVeg(data.recipes);
  } 

  
  return (
    <div>
                <Wrapper>
                    <h3>Our Vegetarian Picks</h3>
                   <Splide options={
                        {
                        perPage:3,
                        arrows:false,
                        gap:"5rem",
                        pagination:true,
                        drag:"free"
                        }
                    }> 
                    
                {veg.map((recipe)=> {return(
                    <SplideSlide key={recipe.id}>
                   <Card>
                    <Link to={"/recipe/"+recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}/>
                    <Gradient/>
                    </Link>
                   </Card>
                   </SplideSlide> 
                )})}
                </Splide>
                </Wrapper>
            
    </div>
  );
}
const Wrapper=styled.div`
margin:4rem 0rem`;
const Card=styled.div`
background-color:black;
border-color:black;
position:relative;
height:100%;
width:100%;
border-radius:2rem;
overflow:hidden;
img{
    border-radius:2rem;
    width:100%;
    height:100%;
    object-fit:stretch;
    posoition:absolute;
    left:0;
}
p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    color:white;
    width:100%;
    transform:translate(-50%,0%);
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
}

`;
const Gradient=styled.div`
 z-index:3;
 position:absolute;
 width:100%;
 height:100%
 background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;
export default Veg;
