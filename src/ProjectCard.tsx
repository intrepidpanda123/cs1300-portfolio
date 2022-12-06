import { Button, Flex, Image, Text, Stack, VStack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom';

interface ProjectCardProps {
  name: string,
  type?: string,
  description: string,
  imgPath: string,
  linkTo: string,
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Stack direction={['column', 'column', 'row']} spacing={['48px', '48px', '96px']} align='center'>
      <Flex
        width='480px'
        justifyContent='center'
      >
        <Image
          src={props.imgPath}
          maxWidth='400px'
          maxHeight='400px'
          borderRadius='5px'
        />
      </Flex>
      <VStack
        width='480px'
        align='flex-start'
        spacing='24px'
      >
        <Text fontSize='2xl'>
          {props.name}
        </Text>
        <Text>
          {props.description}
        </Text>
        <Button as={ReachLink} to={props.linkTo} variant='link' _hover={{ color: '#6BBF59' }}>
          More <ArrowForwardIcon mx='4px'/>
        </Button>
      </VStack>
    </Stack>
  );
}

export default ProjectCard;
