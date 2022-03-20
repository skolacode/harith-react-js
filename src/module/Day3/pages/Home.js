import React from 'react'
import { useNavigate } from "react-router-dom";
import { Center } from './HomeStyle';
import { routeNames } from '../routes/routesName'
import { Button } from '@mui/material';
import { MenuAppBar, Header } from '../../../components'

export const HomePage = () => {

  const navigate = useNavigate();

  return (
    <>
    <MenuAppBar />
    <Center>
      <Header title="Welcome Home" />
      <br />
      <Button size="large" variant="outlined">About</Button>
      <br />
      <Button size="medium" variant="contained" onClick={() => navigate(routeNames.CONTACT)}>Contact US</Button>
    </Center>
    </>
  )
}
