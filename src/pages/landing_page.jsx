
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
import { Box } from '@mui/material';


function LandingPage() {
  return (
    <Box className="gradient-background" 
    sx={{
      background: {
        xs: 'none',  // Hide background on extra-small screens
        // sm:'linear-gradient(to right, #57618A, #C77F05)',
        md: 'linear-gradient(to right, #57618A, #C77F05)',  // Apply gradient on medium screens and larger
        lg: 'linear-gradient(to bottom, #57618A, #C77F05)',  // Change direction on large screens
      },
    }}
    >
      <NavBar />
      <FirstSection />
     
      <div style={{ marginBottom:'20px',marginLeft:'25px', marginRight:'25px',backgroundColor: 'white',  }}>
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
    </Box>
  );
}

export default LandingPage;


