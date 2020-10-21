import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled,{css} from 'styled-components'

const Sidenav = styled.div`
position:fixed;
height:60px;
background-color: green;
color: white;
width:100%;

.topbar{
  display:flex;
  width:100%;
  height: 100%;
  justify-content:space-between;
  align-items: center;
}

@media screen and (min-width:640px){
  display: none;
}

.logo{
  margin-left:1.6rem;
  font-size:24px;
  font-weight:600;
  text-transform: uppercase;
  
  a{
    text-decoration:none;
    color: white;
  }
}

.toggle{
  width:25px;
  height:16px;
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  margin-right:2rem;
  cursor: pointer;

  span{
    display:block;
    border-bottom:2px solid white;
    width: 100%;
  }
}
`;

const Menu = styled.ul`
width: 100%;
max-width:250px;
height: calc(100vh - 60px);
background-color: yellow;
list-style:none;
position:absolute;
top:60px;
transition: all 2550ms ease-in;
/* right:${({click}) => click ? '0':'-100%'}; */
right:-100%;


${({click}) =>click && css`
right: 0;
`}

a{
  /* color: white; */
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

const SideNav = () => {
  const [click, setClick] = useState(false)

  const handleSidenav =()=>{
    setClick(!click)
  }
  return (
    <Sidenav>
<div className="topbar">
<div className="logo"><NavLink to='/'>Katalist</NavLink></div>
  <div className="toggle" onClick={handleSidenav}>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
<Menu click={click}>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/about'>About</NavLink></li>
<li><NavLink to='/products'>Products</NavLink></li>
<li><NavLink to='/services'>Services</NavLink></li>
<li><NavLink to='/contact'>Contact</NavLink></li>
</Menu>
    </Sidenav>
  )
}

export default SideNav
