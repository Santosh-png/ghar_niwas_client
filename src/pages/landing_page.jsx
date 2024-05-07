import React from 'react';
<<<<<<< HEAD
import AboutSection from '../pages/AboutSection';
import ClientFeedback from '../component/clientFeedbackList';


function LandingPage() {
    return (
      <>
      <ClientFeedback/>
      <AboutSection />
      </>
    );
  }

export default LandingPage;

=======
import FirstSection from '../component/cover_section/first_section'
import NavBar from '../component/navbar_component/navbar_component'
import Contact from '../component/contact_component/contact'
import Footer from '../component/footer_component/footer'
import PremiumSection from '../component/premiumListing/premiumListingSection';

function LandingPage() {
  return (
    <div>
      <NavBar />
      <FirstSection/>
      <PremiumSection/>
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage;
>>>>>>> edcbf65f4990bedf911c7b32df7a98e00f693cb8
