import React from 'react'
import { MenuAppBar, Header } from '../../../components';
import { Center } from './HomeStyle';
import { Button, TextField } from '@mui/material';

export const ContactPage = () => {

  return (
    <>
    <MenuAppBar showRightMenu={false} />
    <Center>
      <Header title="Let's have a coffee" />
      <TextField id="outlined-basic" label="Your Email" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Please Comment" variant="outlined" />
      <br />
      <Button size="medium" variant="contained">Submit</Button>
    </Center>
    </>
  )
}
