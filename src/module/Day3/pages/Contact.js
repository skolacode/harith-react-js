import React from 'react'
import { MenuAppBar } from '../../../components';
import { Center, Input } from './HomeStyle';

export const ContactPage = () => {

  return (
    <>
    <MenuAppBar showRightMenu={false} />
    <Center>
      <Input type="text" placeholder='Your Email'></Input>
      <br />
      <Input type="text" placeholder='Please comment'></Input>
      <br />
      <button>Submit</button>
    </Center>
    </>
  )
}
