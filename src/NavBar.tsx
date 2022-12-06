import { Link } from 'react-router-dom';
import { Flex, HStack, Text } from '@chakra-ui/react';

interface TextLinkProps {
  to: string,
  label: string,
  ariaLabel: string,
}

const TextLink = (props: TextLinkProps) => {
  return (
    <Text as={Link} to={props.to} aria-label={props.ariaLabel} _hover={{ color: '#6BBF59' }}>
      {props.label}
    </Text>
  )
}

const NavBar = () => {
  return (
    <Flex
      height='80px'
      align='center'
      justify='space-between'
      padding='0px 36px'
      position='fixed'
      width='100%'
      maxWidth='1080px'
      bgGradient='linear(to-b, #FFFFFF, #FFFFFFFF, #FFFFFFEE, #FFFFFFDD, #FFFFFFAA, #FFFFFF00)'
      zIndex='1'
    >
      <TextLink to='/' label='Intrepid Panda' ariaLabel='link to homepage'/>
      <HStack spacing='48px'>
        <TextLink to='/uiux/responsive-redesign' label='Portfolio' ariaLabel='link to portfolio section' />
        <TextLink to='/uiux/personas-storyboarding' label='Research' ariaLabel='link to research section' />
        <TextLink to='/uiux/about' label='About' ariaLabel='link to about section' />
      </HStack>
    </Flex>
  );
}

export default NavBar;
