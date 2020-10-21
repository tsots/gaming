import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import Footer from './Footer';
import Navigation from './PrimaryNav';
import SideNav from './SideNav';


const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x:hidden;
`;


const Layout = ({children}) =>{

  return(
    <LayoutWrapper>
    <Navigation />
    <SideNav/>
    <Content>
    {children}
    </Content>
    <Footer/>
    </LayoutWrapper>
  )
};

export default Layout