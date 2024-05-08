import React, { useEffect, useState } from 'react';
import FirstSection from '../component/cover_section/first_section'
import NavBar from '../component/navbar_component/navbar_component'
import Contact from '../component/contact_component/contact'
import Footer from '../component/footer_component/footer'
import { Box } from '@mui/material';

import { getProperty, filterProperty } from '../data/data_search';
import { property, buttons } from '../data/dataset';

function LandingPage() {
  const [filterProperty, setFilterProperty] = useState(null);
  useEffect(() =>{
    setFilterProperty(getProperty());
  }, []);

  function handleProperty(e) {
    let typeProperty = e.target.value;
    typeProperty !== 'all'
    ? setFilterProperty(filterProperty(typeProperty))
    : setFilterProperty(getProperty())
  }

  return (
    <div>
      <NavBar />
      <FirstSection/>
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage
