import React from 'react'
import { useNavigate } from "react-router-dom";
import { Center } from './HomeStyle';
import { routeNames } from '../routes/routesName'
import { MenuAppBar, Header, MyButton } from '../../../components'


export const HomePage = () => {

  const navigate = useNavigate();

  return (
    <>
    <MenuAppBar />
    <Center>
      <Header title="Welcome Home" />
      <br />
      
      <MyButton variant="outlined">About</MyButton>

      <MyButton>
        About
      </MyButton>

      <br />
      <MyButton 
        onClick={() => navigate(routeNames.CONTACT)}
      >
        Contact USs
      </MyButton>
    </Center>
    </>
  )
}
