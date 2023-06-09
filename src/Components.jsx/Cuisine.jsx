import React,{useEffect,useState} from 'react';
import {useParams} from'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Cuisine() {
    const[cuisine,setCuisine]=useState([]);
    let params=useParams();
    const getCuisine=async(name)=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4787e261d7714ec89a5c6780eddf51fc&number=15&cuisine=${name}`)
        const recipe=await data.json();
        setCuisine(recipe.results);
      };
      useEffect(()=>{
        getCuisine(params.type);
        console.log(params.type);
      },[params.type]);
  return (
    <Grid>
    {cuisine.map((item)=>{
      return(
        <Card key={item.id}>
            <Link to={"/recipe/"+item.id}>
            <img src={item.image} alt={item.title}/>
             <h4>{item.title}</h4>
             </Link>
        </Card>
      )
    })}
    </Grid>
  )
}
const Grid=styled.div`
display:grid;
grid-template-columns:repeat(3,minmax(20rem,1fr));
grid-gap:3rem;
justify-content:center;
`;
const Card=styled.div`

img{
    width:100%;
    border-radius:2rem;
}
a{
    text-decoration:none;
}
h4{
    text-align:center;
    padding:1rem;
}
`
export default Cuisine;
