import React from 'react'

// Styled Components
import HeaderWrap from '../components/styled/HeaderWrap'
import Logo from '../components/styled/Logo'
import Nav from '../components/styled/Nav'
import NavLinks from '../components/styled/NavLinks'
import Links from '../components/styled/Links'

const Header = () => {
  return (
    <HeaderWrap>
      <Logo><Links to='/'>Made By Edward</Links></Logo>
      <Nav>
        <NavLinks>
          <Links to='/about'>about</Links>
        </NavLinks>
        {/* <NavLinks>|</NavLinks>
        <NavLinks>
          <Links to='/projects'>projects</Links>
        </NavLinks> */}
        <NavLinks>|</NavLinks>
        <NavLinks>
          <Links to='/thoughts'>thoughts</Links>
        </NavLinks>
      </Nav>
    </HeaderWrap>
  )
}

export default Header
