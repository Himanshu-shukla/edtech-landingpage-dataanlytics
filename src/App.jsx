import { useState } from 'react' // Import useState
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkshopLanding from './components/WorkshopLanding.jsx'
import CareerWarningSection from './components/CareerWarningSection.jsx'
import AlumniSection from './components/AlumniSection.jsx'
import WhyDataAnalytics from './components/WhyDataAnalytics.jsx'
import CurriculumSection from './components/CurriculumCard.jsx'
import TargetAudienceSection from './components/TargetAudienceSection.jsx'
import BonusSection from './components/BonusSection.jsx'
import ComparisonSection from './components/ComparisonSection.jsx'
import IndustryGrowthSection from './components/IndustryGrowthSection.jsx'
import TestimonialSection from './components/TestimonialSection.jsx'
import InstructorSection from './components/InstructorSection.jsx'
import IrreplaceableSkillsSection from './components/IrreplaceableSkillsSection.jsx'
import FAQSection from './components/FAQSection.jsx'
import FoundryHero from './components/FoundryHero.jsx'
import Navbar from './components/navbar.jsx'
import VideoShowcase from './components/VideoShowcase.jsx'
import ProgramsSection from './components/ProgramsSection.jsx'
import CareerStats from './components/CareerStats.jsx'
import WhatsAppWidget from './components/WhatsAppWidget.jsx'
import BootcampAgenda from './components/BootcampAgenda.jsx'
import ExclusiveBonusesSection from './components/ExclusiveBonusesSection.jsx'
import StickyEnrollBar from './components/StickyEnrollBar.jsx'

function App() {
  // 1. Create state to track if the sticky bar is visible
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  return (
    <div className="bg-neutral-950 min-h-screen text-white selection:bg-emerald-500/30 pb-24 md:pb-0"> 
      
      <FoundryHero />
      <BootcampAgenda />
      <AlumniSection />
      <TestimonialSection />
      <ExclusiveBonusesSection />

      <div className="flex flex-col gap-0"> 
        <ProgramsSection />
        <IndustryGrowthSection />
        <ComparisonSection />
        <TargetAudienceSection />

        <WorkshopLanding />
        <BonusSection />
        <IrreplaceableSkillsSection />
        <FAQSection />
      </div>
      
      {/* 2. Pass the state to WhatsAppWidget */}
      <WhatsAppWidget isStickyVisible={isStickyVisible} />
      
      {/* 3. Pass the setter function to StickyEnrollBar */}
      <StickyEnrollBar onVisibilityChange={setIsStickyVisible} />

      <footer className="py-8 text-center text-neutral-600 text-sm border-t border-neutral-900 mt-10">
        <p>© 2026 EdTech Informative. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App