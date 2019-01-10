import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <Container>
        <Header title={title} />
        {children}
        <footer>
          © {new Date().getFullYear()} | Built by Edward with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    )
  }
}

export default Layout
