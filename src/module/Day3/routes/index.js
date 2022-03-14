import * as React from 'react'
import {
  Routes, Route,
} from "react-router-dom";

import { AboutPage, HomePage, ContactPage } from '../pages'

export const InitRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Another route 
          1. /about/my-life
        */}
      </Routes>
    </div>
  )
}
