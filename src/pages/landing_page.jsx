
import FirstSection from '../component/cover_section/first_section'
import NavBar from '../component/navbar_component/navbar_component'
import Contact from '../component/contact_component/contact'
import Footer from '../component/footer_component/footer'
import PremiumSection from '../component/premiumListing/premiumListingSection';
import TopSection from '../component/topListing/topListingSection';
import FeaturedSection from '../component/featuredListing/featuredSection';
import UploadedSection from '../component/recentlyUploaded/uploadedSection';
import AboutSection from './AboutSection';
import ClientFeedback from '../component/feedback/ClientFeedback.component';
import ListSection from '../component/Listing/ListingSection';
// import PropertyDetail from '../component/propertyDescription/propertyDetail';

function LandingPage() {
  return (
    <div>
      <NavBar />    
      <FirstSection/>
      <ListSection />
      <PremiumSection/>
      <TopSection/>
      <FeaturedSection/>
      <UploadedSection/>
      <ClientFeedback/>
      <AboutSection/>
      <Contact />
      <Footer /> 
      {/* <PropertyDetail/> */}
    </div>
  )
}

export default LandingPage;
