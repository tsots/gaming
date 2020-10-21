import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.main`
padding-right:1.5rem;
padding-left:1.5rem;
padding-top:60px;

@media screen and (min-width: 640px){
  padding-top:0px;
}
`;

const Container = styled.div`
width:95%;
padding-top:30px;
height:100%;

p{
  font-weight:400;
  line-height:2;
}

@media screen and (min-width:640px){
  width:100%;
  max-width:1024px;
  margin: 0 auto;
}
`;

const Content = ({children}) => {
  return (
    <Wrapper>
      <Container>
      {children}
      </Container>
    </Wrapper>
  )
}

export default Content
