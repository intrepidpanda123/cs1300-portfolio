import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import PersonasAndStoryboarding from './uiux-coursework/PersonasAndStoryboarding';
import ResponsiveRedesign from './uiux-coursework/ResponsiveRedesign';
import { Box } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import IterativeDesign from './portfolio-items/IterativeDesign';
import EyeTracking from './portfolio-items/EyeTracking';
import Redesign from './portfolio-items/Redesign';

function AppRouter() {
  const location = useLocation();

  return (
    <Box padding='80px 24px'>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/work" element={<Work />}/>
          <Route path="/personas-storyboarding" element={<PersonasAndStoryboarding />}/>
          <Route path="/responsive-redesign" element={<Redesign />}/>
          <Route path="/iterative-design" element={<IterativeDesign />}/>
          <Route path="/eye-tracking" element={<EyeTracking />}/>
        </Routes>
      </AnimatePresence>
    </Box>
  );
}

export default AppRouter;
