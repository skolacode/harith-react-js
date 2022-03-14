import React from 'react'
import { Link } from 'react-router-dom'
import { routeNames } from '../routes/routesName'


export const HomePage = () => {

  return (
    <div>
      {/* TODO
        1. Have an a tag with a link to About and Contact page
      */}
      <h1>Welcome Home!!!</h1>
      
      <Link to={routeNames.ABOUT}>About</Link>
      <br />
      <a href={routeNames.CONTACT}>Contact</a>
    </div>
  )
}
