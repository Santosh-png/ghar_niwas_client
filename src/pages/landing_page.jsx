
import './backgroundcolor.css';
import FirstSection from '../component/cover_section/first_section';
import NavBar from '../component/navbar_component/navbar_component';
import Contact from '../component/contact_component/contact';
import Footer from '../component/footer_component/footer';
import PremiumSection from '../component/premiumListing/premiumListingSection';
import TopSection from '../component/topListing/topListingSection';
import FeaturedSection from '../component/featuredListing/featuredSection';
import UploadedSection from '../component/recentlyUploaded/uploadedSection';
import AboutSection from './AboutSection';
import ClientFeedback from '../component/feedback/ClientFeedback.component';
import ListSection from '../component/Listing/ListingSection';


function LandingPage() {
  return (
    <div style={{ backgroundColor:'#FBAF1A'}}>
      <NavBar />
      <FirstSection />
      <div style={{ marginBottom:'20px',marginLeft:'25px', marginRight:'25px',backgroundColor: 'white' }}>
        <ListSection />
      </div>
      <div style={{ marginBottom: '20px', marginLeft:'25px', marginRight:'25px', backgroundColor: 'white' }}>
        <PremiumSection />
      </div>
      <div style={{ marginBottom: '20px', marginLeft:'25px', marginRight:'25px', backgroundColor: 'white' }}>
        <TopSection />
      </div>
      <div style={{ marginBottom: '20px', marginLeft:'25px', marginRight:'25px',  backgroundColor: 'white' }}>
      <FeaturedSection />
      </div>
      <div style={{ marginBottom: '20px', marginLeft:'25px', marginRight:'25px', backgroundColor: 'white' }}>
      <UploadedSection />
      </div>
      <div style={{ marginBottom: '20px', marginLeft:'25px', marginRight:'25px', backgroundColor: 'white' }}>
      <ClientFeedback />
      </div>
      <div style={{ marginBottom: '20px', marginLeft:'25px', marginRight:'25px', backgroundColor: 'white' }}>
      <AboutSection />
      </div>
      <div style={{backgroundColor: 'white'}}>
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default LandingPage;

// import './backgroundcolor.css';
// import FirstSection from '../component/cover_section/first_section';
// import NavBar from '../component/navbar_component/navbar_component';
// import Contact from '../component/contact_component/contact';
// import Footer from '../component/footer_component/footer';
// import PremiumSection from '../component/premiumListing/premiumListingSection';
// import TopSection from '../component/topListing/topListingSection';
// import FeaturedSection from '../component/featuredListing/featuredSection';
// import UploadedSection from '../component/recentlyUploaded/uploadedSection';
// import AboutSection from './AboutSection';
// import ClientFeedback from '../component/feedback/ClientFeedback.component';
// import ListSection from '../component/Listing/ListingSection';

// function LandingPage() {
//   return (
//     <div style={{ backgroundColor: 'gray' }}>
//       <NavBar />
//       <FirstSection />
//       <div style={{ padding: '20px', backgroundColor: 'white' }}>
//         <ListSection />
//       </div>
//       <div style={{ padding: '20px', backgroundColor: 'transparent' }}>
//         <PremiumSection />
//       </div>
//       <div style={{ padding: '20px', backgroundColor: 'transparent' }}>
//         <TopSection />
//       </div>
//       <FeaturedSection />
//       <UploadedSection />
//       <ClientFeedback />
//       <AboutSection />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default LandingPage;
