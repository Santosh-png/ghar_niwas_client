import React from 'react'
import FirstSectionLanding from '../section/first_section'
import PremiumSection from '../component/premiumListing/premiumListingSection';
import PremiumList from '../component/premiumListing/premiumListingService'
function LandingPage() {
  return (
    <div>
      <FirstSectionLanding/>
      <PremiumSection/>
    </div>
  )
}

export default LandingPage;
