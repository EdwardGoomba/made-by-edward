import styled from 'styled-components'
import Mailchimp from 'react-mailchimp-form'

const SignupForm = styled(Mailchimp)`

  input {
    background-color: #F2F6F9;
    border: none;
    padding: 0.8em;
    width: 55%;
  }

  button {
    border: none;
    background-color: #F9435F;
    color: #F2F6F9;
    padding: 0.8em;
  }
`

export default SignupForm
