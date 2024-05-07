
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
