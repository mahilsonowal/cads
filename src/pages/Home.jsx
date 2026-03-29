import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
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
      <Courses />
      <EntranceExams />
      <Facilities />
      <StudentOutcomes />
      <CTA />
      <Contact />
      <Footer />

    </>
  );
};

export default Home;
