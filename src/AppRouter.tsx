import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import PersonasAndStoryboarding from './uiux-coursework/PersonasAndStoryboarding';
import ResponsiveRedesign from './uiux-coursework/ResponsiveRedesign';
import { Box } from '@chakra-ui/react';

function AppRouter() {
  return (
    <Box padding='24px'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/work" element={<Work />}/>
        <Route path="/uiux/personas-storyboarding" element={<PersonasAndStoryboarding />}/>
        <Route path="/uiux/responsive-redesign" element={<ResponsiveRedesign />}/>
      </Routes>
    </Box>
  );
}

export default AppRouter;
