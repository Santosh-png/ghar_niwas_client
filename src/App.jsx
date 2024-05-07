
import React from 'react'
import NavBar from './component/navbar_component/navbar_component'
import Footer from './component/footer_component/footer'
import Contact from './component/contact_component/contact'


import './global.css'
import LandingPage from './pages/landing_page'

function App() {
      return(
        <>     
        <NavBar/>


        <LandingPage />
        </>
      );
     
  }

export default App;
