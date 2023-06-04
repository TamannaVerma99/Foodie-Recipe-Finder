import React from 'react';
import styled from 'styled-components';

import {NavLink} from 'react-router-dom';
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {BiBowlRice} from 'react-icons/bi';
function Category() {
  return (
    <>
  <List>
        <DesLink to={'/Cuisine/Indian'}>
      <BiBowlRice/>
      <h4>Indian</h4>
      </DesLink>
      <DesLink to={'/Cuisine/Italian'}>
      <FaPizzaSlice/>
      <h4>Italian</h4>
      </DesLink>
      <DesLink to={'/Cuisine/American'}>
      <FaHamburger/>
      <h4>American</h4>
      </DesLink>
      </List>
    </>
  );
}
const List=styled.div`
display:flex;
justify-content:center;
margin:2rem 0rem;
`;
const DesLink=styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background-color:black;
color:white;
cursor:pointer;
width:4rem;
height:4rem;
h4{
    color:white;
    font-size:0.6rem;
    margin-top:4px;
}
&.active{
    background-color: aquamarine;
    color:black;
    h4{
        color:black;
    }
  }

`
export default Category;
