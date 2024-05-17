
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
    <div className="gradient-background">
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
      </div>
      <div style={{backgroundColor: 'white' }}>
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
//     <div style={{ backgroundColor:' #57618A'}}>
//       <NavBar />
//       <FirstSection />
//       <div style={{ marginBottom:'20px',marginLeft:'25px', marginRight:'25px',backgroundColor: 'white' }}>
//         <ListSection />
//       </div>
//       <div style={{ marginBottom: '20px', marginLeft:'25px', marginRight:'25px', backgroundColor: 'white' }}>
//         <PremiumSection />
//       </div>
//       <div style={{ marginBottom: '20px', marginLeft:'25px', marginRight:'25px', backgroundColor: 'white' }}>
//         <TopSection />
//       </div>
//       <div style={{ marginBottom: '20px', marginLeft:'25px', marginRight:'25px',  backgroundColor: 'white' }}>
//       <FeaturedSection />
//       </div>
//       <div style={{ marginBottom: '20px', marginLeft:'25px', marginRight:'25px', backgroundColor: 'white' }}>
//       <UploadedSection />
//       </div>
//       <div style={{ marginBottom: '20px', marginLeft:'25px', marginRight:'25px', backgroundColor: 'white' }}>
//       <ClientFeedback />
//       </div>
//       <div style={{ marginBottom: '20px', marginLeft:'25px', marginRight:'25px', backgroundColor: 'white' }}>
//       <AboutSection />
//       </div>
//       <div style={{backgroundColor: 'white'}}>
//       <Contact />
//       </div>
//       <div style={{backgroundColor: 'white' }}>
//       <Footer />
//       </div>
//     </div>
//   );
// }

// export default LandingPage;