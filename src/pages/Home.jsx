import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CoursesSection from '../components/CoursesSection';
import SoftwareSection from '../components/SoftwareSection';
import BrochureSection from '../components/BrochureSection';
import ArtClassesSection from '../components/ArtClassesSection';
import EntranceExams from '../components/EntranceExams';
import Facilities from '../components/Facilities';
import StudentOutcomes from '../components/StudentOutcomes';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MobileStickyBar from '../components/MobileStickyBar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CoursesSection />
      <SoftwareSection />
      <BrochureSection />
      <ArtClassesSection />
      <EntranceExams />
      <Facilities />
      <StudentOutcomes />
      <CTA />
      <Contact />
      <Footer />
      <MobileStickyBar />
    </>
  );
};

export default Home;
