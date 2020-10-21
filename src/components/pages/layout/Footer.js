import React from 'react'
import styled from 'styled-components';


const MyFooter = styled.div`
width:100vw;
height:30px;
background-color: black;
color: white;
display: flex;
justify-content:center;
align-items:center;
margin-top: auto;
`;


const Footer =() =>{
  return(
    <MyFooter>
      This is the MyFooter
    </MyFooter>
  )
}

export default Footer
