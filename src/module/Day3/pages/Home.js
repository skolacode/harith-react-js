import React from 'react'
import { useNavigate } from "react-router-dom";
import { Center } from './HomeStyle';
import { routeNames } from '../routes/routesName'


export const HomePage = () => {

  const navigate = useNavigate();

  return (
    <Center>
      {/* TODO
        1. Have an a tag with a link to About and Contact page
      */}
      <h1>Welcome Home!!!</h1>
      <br />
      <button>About</button>
      <br />
      <button onClick={() => navigate(routeNames.CONTACT)}>Contact</button>
    </Center>
  )
}
