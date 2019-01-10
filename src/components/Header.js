import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Header
const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2em;
  padding-bottom: 0;
`

// Logo Style
const Logo = styled.h3`
  font-family: acumin-pro, sans-serif;
  font-size: 1.5em;
  margin-top: 1em !important;
`

// Nav Style
const Nav = styled.ul`
  font-family: acumin-pro, sans-serif;
  display: flex;
  text-decoration: none;
`

const NavLinks = styled.li`
  padding-left: 1em;
  padding-top: 0.8em;
  list-style: none;
  font-size: 1.2em;
`

const Links = styled(Link)`
  box-shadow: none !important;
  color: #000;
`

const Header = () => {
  return (
    <HeaderWrap>
      <Logo><Links to='/'>Made By Edward</Links></Logo>
      <Nav>
        <NavLinks>
          <Links to='/about'>about</Links>
        </NavLinks>
        <NavLinks>|</NavLinks>
        <NavLinks>
          <Links to='/thoughts'>thoughts</Links>
        </NavLinks>
      </Nav>
    </HeaderWrap>
  )
}

export default Header
