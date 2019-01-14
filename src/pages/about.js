import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout'
import Momentum from '../components/Momentum'

// Images
import Profile from '../../content/assets/profile-pic.jpg'

// Styled Components
import Hello from '../components/styled/Hello'
import Me from '../components/styled/Me'
import Heading from '../components/styled/Heading'
import SubHeading from '../components/styled/SubHeading'
import Links from '../components/styled/Links'

const IntroContainer = styled.div`
  max-width: 1000px;
  padding-top: 6em;
`

const Shameless = styled(Links)`
  color: red;
`

const Values = styled.div`
  padding-bottom: 2em;
`

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <IntroContainer>
          <Hello>Who is this Edward</Hello>
          <Me src={Profile} />
          <p>Thats me. Right up there.</p>

          <SubHeading>
            Thats a great question. To answer that we have to go waaaay back. Okay, just kidding. I am a product designer and run a solo company called <Shameless to='https://edwardvdesign.com'>Edward V Design</Shameless>. I design and develop SaaS products for forward thinking startups and businesses.
          </SubHeading>

          <SubHeading>
            I also am the father of two little munchkins, and husband to a very patient wife. I love waffles, coffee, doughnuts, tasty treats (you might be picking up on a theme here by now). I am a wanderer, always experimenting, always coming up with ideas. Recently I started attempting to put some of my thoughts into film and writing.
          </SubHeading>

          <SubHeading>
            In my spare time I enjoy spending time with my family, making more things, and laying on the pouf.
          </SubHeading>
        </IntroContainer>

        <Momentum />
        <Values>
          <Heading>Values</Heading>
          <SubHeading>Family, Truth, Honor, Focus, Adventure</SubHeading>
        </Values>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
