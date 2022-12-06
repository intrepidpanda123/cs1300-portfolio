import { Button, Center, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function Home() {
  return (
    <Center
      padding='128px 48px 0px'
    >
      <VStack
        spacing='108px'
      >
        <HStack
          spacing='60px'
        >
          <Image
            src='/cs1300-portfolio/panda.jpeg'
            borderRadius='full'
            boxSize='150px'
            alt='panda image'
          />
          <VStack
            className='intro'
            align='flex-start'
            spacing='40px'
          >
            <VStack
              align='flex-start'
              spacing='24px'
            >
              <Text fontSize='4xl'>
                This is Intrepid Panda
              </Text>
              <Text>
                I am a web and UX designer focused on making simple yet effective interfaces
              </Text>
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
        <VStack id='portfolio-section' spacing='80px'>
          <Text fontSize='3xl'>
            Portfolio
          </Text>
          <VStack
            spacing='128px'
          >
            <ProjectCard name='Redesigning Fandom' description='A brief description about responsive redesign' imgPath='/cs1300-portfolio/responsive-webpage.png' linkTo='/uiux/responsive-redesign'/>

            <ProjectCard name='Prototyping a Note-Taking App' description='A brief description about iterative design' imgPath='/cs1300-portfolio/iterative-design-screenshot.png' linkTo='/uiux/iterative-design'/>
          </VStack>
        </VStack>
        <VStack id='research-section' spacing='80px'>
          <Text fontSize='3xl'>
            Research
          </Text>
          <VStack
            spacing='128px'
          >
            <ProjectCard name='Ordering at Ten One Tea House' description='A brief description about personas and storyboarding' imgPath='/cs1300-portfolio/tenone.jpg' linkTo='/uiux/personas-storyboarding'/>
          </VStack>
        </VStack>
      </VStack>
    </Center>
  );
}

export default Home;
