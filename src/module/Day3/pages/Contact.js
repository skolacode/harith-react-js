import React from 'react'
import { Center, Input } from './HomeStyle';

export const ContactPage = () => {

  return (
    <Center>
      <Input type="text" placeholder='Your Email'></Input>
      <br />
      <Input type="text" placeholder='Please comment'></Input>
      <br />
      <button>Submit</button>
    </Center>
  )
}
