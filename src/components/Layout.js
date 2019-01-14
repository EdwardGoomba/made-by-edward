import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'

// Styled Components
import Container from '../components/styled/Container'

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <Container>
        <Header title={title} />
        {children}
        <footer>
          © {new Date().getFullYear()} |
          Built by Edward with Gatsby |
          Socials:
          {` `}
          <a href="https://twitter.com/edwardgoomba">le Twitter,</a>
          {` `}
          <a href="https://dribbble.com/edwardgoomba">le Dribbble,</a>
        </footer>
      </Container>
    )
  }
}

export default Layout
