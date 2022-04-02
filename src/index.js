import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { InitRoutes } from './module/Day3/routes'
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <InitRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
