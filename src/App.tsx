import AppRouter from './AppRouter';
import NavBar from './NavBar';
import { Box } from '@chakra-ui/react';

export default function App() {

  return (
    <Box
      maxWidth='100vw'
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Box
        width='100%'
        maxWidth='1080px'
      >
        <NavBar />
        <AppRouter />
      </Box>
    </Box>
  );
}
