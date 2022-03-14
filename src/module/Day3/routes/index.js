import * as React from 'react'
import {
  Routes, Route,
} from "react-router-dom";

import { AboutPage, HomePage, ContactPage, MyLife  } from '../pages'

export const InitRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about/my-life" element={<MyLife />} />
      </Routes>
    </div>
  )
}
