import React from 'react';
import {useEffect,useState} from 'react';
import styled from 'styled-components';
import{useParams} from 'react-router-dom';
function Recipe() {
    let params=useParams();
    const[info,setInfo]=useState({});
    const[activeTab,setActiveTab]=useState({});
    const fetchDetails=async()=>{
    const api=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=4787e261d7714ec89a5c6780eddf51fc`)
    const det=await api.json();
    setInfo(det);    
    }
    useEffect(()=>{
        fetchDetails();
    },[params.name]);
  return (
    <>
    <DetailWrapper>
        <div>
     <h2>{info.title}</h2> 
     <img src={info.image} alt=""/>
     </div>
    <div className="rtcont">
    <Info>
    <DesButton  className={activeTab==="instructions" ? "active" : ""} onClick={()=>setActiveTab("instructions")}>Instructions</DesButton>
    <DesButton className={activeTab==="ingredients" ? "active" : ""} onClick={()=>setActiveTab("ingredients")}>Ingredients</DesButton>
    
   </Info>
   <div>
   {activeTab==="instructions" && (
       <div>
        <h3 dangerouslySetInnerHTML={{__html: info.summary}}></h3> 
       <h3 dangerouslySetInnerHTML={{__html: info.instructions}}></h3> 
      </div>
    )}
      
   
   
   </div>
   {activeTab==="ingredients" && (
   <div className="ingre">
   <ul>
    {info.extendedIngredients.map((ingredient)=>(
        <li key={ingredient.id}>{ingredient.original}</li>
    ))}
   </ul>
   </div>
   )}
    </div>
   
    </DetailWrapper>
    
    </>
  );
}
const DetailWrapper=styled.div`
margin-top:5rem;
margin-bottom:5rem;
display:flex;
.active{
   background-color:black;
   color:white;
}
h2{
    margin-bottom:2rem;
    position:sticky;
    top:1rem;
}
li{
    font-size:1.2rem;
    line-height:2.5rem;
}
ul{
 margin-top:2rem;   
}
img{
    border-radius:2rem;
    position:sticky;
    top:4rem;
}
.rtcont{
    display:flex;
    flex-direction:column;

}
h3{
    margin-left:2rem;
    margin-right:1rem;
    font-weight:200;
    font-size:20px;
}
.ingre{
    margin-left:2rem;
    margin-right:1rem;
    font-weight:200;
    font-size:20px;
}
`;
const DesButton=styled.button`
padding:1rem 2rem;
color:black;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
border-radius:2rem;
margin-bottom:1rem;
cursor:pointer;

`;
const Info=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
margin-left:5rem;
margin-top:5rem;


`;
export default Recipe;
