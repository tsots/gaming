import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';

const Topbar = styled.div`
width:100%;
height:60px;
background-color: green;
display: none;
grid-area: navigation;


.container{
  display: flex;
  height:100%;
  justify-content:space-between;
  align-items:center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 3rem;
  padding-right:3rem;
  
  @media screen and (min-width:1024px){
    padding-left: 0;
  padding-right:0;
  }
}

.logo{
  /* margin-left:1.6rem; */
  font-size:24px;
  font-weight:600;
  text-transform: uppercase;
  color: white;

  a{
    text-decoration:none;
    color: white;
  }
}

@media screen and (min-width: 640px){
  display: block;
}
`;

const Menu = styled.ul`
display: flex;
list-style: none;
height: 100%;


a{
  color: white;
  display: flex;
  height: 100%;
  padding-left:.5rem;
  padding-right:.5rem;
  align-items:center;
  text-decoration:none;
  text-transform: uppercase;
  font-size:.9rem;
}
`;


const Navigation = () =>{
  return(
    <Topbar>
      <div className="container">
      <div className="logo"><NavLink to='/'>Katalist</NavLink></div>
      <Menu>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/about'>About</NavLink></li>
<li><NavLink to='/products'>Products</NavLink></li>
<li><NavLink to='/services'>Services</NavLink></li>
<li><NavLink to='/contact'>Contact</NavLink></li>
      </Menu>
      </div>
    </Topbar>
  )
}

export default Navigation