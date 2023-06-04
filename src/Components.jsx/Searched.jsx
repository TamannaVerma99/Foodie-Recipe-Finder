import React from 'react';
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
function Searched() {
    const [searchedRecipes,setSearchedRecipes]=useState([]);
    let params=useParams();
    const getSearched=async(answer)=>{
    const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4787e261d7714ec89a5c6780eddf51fc&number=15&query=${answer}`);
    const food=await data.json();
    setSearchedRecipes(food.results);
    }; 
    useEffect(()=>{getSearched(params.search);},[params.search]);
  return (
    <Grid>
    {searchedRecipes.map((item)=>{
      return(
        <Card key={item.id}>
            <img src={item.image} alt={item.title}/>
             <h4>{item.title}</h4>
        </Card>
      )
    })}
    </Grid>
  );
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
export default Searched;
