import React from 'react'
import styled from 'styled-components'

// Styled Components
import SignupForm from '../components/styled/SignupForm'

const IntroContainer = styled.div`
  height: 30%;
  max-width: 700px;
  padding-top: 5em;

  p {
    font-size: 1.1em;
  }
`

const Momentum = () => {
  return (
    <IntroContainer>
      <p>I also write Momentum, a weekly newsletter for creatives who are juggling making a living and navigating the hazards of life. If you are looking for laughs, “wtf was this guy thinking” moments or life lessons - you'll feel at home. There’s no spam and it’s totally free. Wanna be the first subscriber?
      </p>
      <SignupForm
        action='https://madebyedward.us7.list-manage.com/subscribe/post?u=90ad792bc930baaaa94db575c&amp;id=03d493fdc6'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Your email address...',
            type: 'email',
            required: true
          }
        ]}
        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "Kinda need your email here",
            duplicate: "Hey sorry, you already used this email to signup before!",
            button: "Join Now"
          }
        }
      />
    </IntroContainer>
  )
}

export default Momentum
