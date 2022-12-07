import { Button, Flex, Image, Text, Stack, VStack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  name: string,
  type?: string,
  description: string,
  imgPath: string,
  linkTo: string,
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.75 }}
    >
      <Stack
        direction={['column', 'column', 'row']}
        spacing='36px'
        align='center'
      >
        <Flex
          width='480px'
          justifyContent='center'
        >
          <Image
            src={props.imgPath}
            maxWidth='400px'
            maxHeight='320px'
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
          <Button as={Link} to={props.linkTo} variant='link' _hover={{ color: '#6BBF59' }}>
            More <ArrowForwardIcon mx='4px'/>
          </Button>
        </VStack>
      </Stack>
    </motion.div>
  );
}

export default ProjectCard;
