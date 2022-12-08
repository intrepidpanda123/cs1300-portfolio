import { Button, Center, Divider, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

function Home() {
  const { state } = useLocation();

  useEffect(() => {
    document.title = 'Intrepid Panda';

    if (state && state.id) {
      const section = document.getElementById(state.id)!;
      window.scrollTo({ top: section.offsetTop - 100, left: 0, behavior: 'auto' });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Center
        padding='60px 48px 36px'
      >
        <VStack
          spacing='60px'
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
          >
          <HStack
            id='intro-section'
            spacing='60px'
          >
            <Image
              src='/cs1300-portfolio/panda.jpeg'
              borderRadius='full'
              boxSize='150px'
              alt='panda image'
            />
            <VStack
              align='flex-start'
              spacing='24px'
            >
              <VStack
                align='flex-start'
                spacing='24px'
              >
                <Text fontSize='4xl'>
                  This is Intrepid Panda
                </Text>
                <div>
                  <Text>
                    I am a web and UX designer focused on making simple yet effective interfaces.
                  </Text>
                  <Text>
                    I also like eating chutes and leaves.
                  </Text>
                </div>
              </VStack>
              <HStack spacing='24px'>
                <Button
                  as={Link}
                  variant='link'
                  href='https://www.linkedin.com/in/profjeffhuang'
                  aria-label='link to LinkedIn'
                  isExternal
                >
                  LinkedIn <ExternalLinkIcon mx='4px'/>
                </Button>
                <Button
                  as={Link}
                  variant='link'
                  href='https://github.com/intrepidpanda123'
                  aria-label='link to GitHub'
                  isExternal
                >
                  GitHub <ExternalLinkIcon mx='4px' />
                </Button>
                <Button
                  as={Link}
                  variant='link'
                  to='/'
                  aria-label='link to resume'
                  isExternal
                >
                  Resume
                </Button>
                <Button
                  as={Link}
                  variant='link'
                  href='mailto:115044343+intrepidpanda123@users.noreply.github.com'
                  aria-label='link to send email'
                >
                  Email
                </Button>
              </HStack>
            </VStack>
          </HStack>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <Divider borderColor='#AAAAAA'/>
          </motion.div>
          <VStack id='portfolio-section' spacing='48px'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Text fontSize='3xl'>
                Work
              </Text>
            </motion.div>
            <VStack
              spacing='76px'
            >
              <ProjectCard name='Redesigning Fandom' description='Creating a more user-friendly design for the Star Wars Fandom Wiki' imgPath='/cs1300-portfolio/responsive-webpage.png' linkTo='/responsive-redesign'/>

              <ProjectCard name='Prototyping a Note-Taking App' description='Innovating a framework to organize notes for visual thinkers' imgPath='/cs1300-portfolio/iterative-design-screenshot.png' linkTo='/iterative-design'/>
            </VStack>
          </VStack>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <Divider borderColor='#AAAAAA'/>
          </motion.div>
          <VStack id='research-section' spacing='48px'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Text fontSize='3xl'>
                Research
              </Text>
            </motion.div>
            <VStack
              spacing='76px'
            >
              <ProjectCard name='Ten One Tea House Ordering' description='Understanding the Ten One Snackpass kiosk ordering experience through the eyes of its users' imgPath='/cs1300-portfolio/tenone.jpg' linkTo='/personas-storyboarding'/>
              <ProjectCard name='Eye Tracking for a Bakery Website' description='Investigating the effects of various page layouts on user attention and impressions' imgPath='/cs1300-portfolio/heatmap1.png' linkTo='/eye-tracking'/>
            </VStack>
          </VStack>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Text pt='144px'>
              Copyright 2022 © Intrepid Panda
            </Text>
          </motion.div>
        </VStack>
      </Center>
    </motion.div>
  );
}

export default Home;
