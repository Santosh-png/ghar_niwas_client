import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@emotion/react";
// import Provider


import theme from "./theme";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <Provider store={store}> */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    {/* </Provider>   */}
  </React.StrictMode>,
)
