
import FirstSection from '../component/cover_section/first_section'
import NavBar from '../component/navbar_component/navbar_component'
import Contact from '../component/contact_component/contact'
import Footer from '../component/footer_component/footer'
import PremiumSection from '../component/premiumListing/premiumListingSection';
import AboutSection from './AboutSection';
import ClientFeedback from '../component/feedback/ClientFeedback.component';

function LandingPage() {
  return (
    <div>
      <NavBar />
      <FirstSection/>
      <PremiumSection/>
      <ClientFeedback/>
      <AboutSection/>
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage;
