import { useEffect, useState } from 'react';
import { Flex, HStack, Text } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

interface TextLinkProps {
  to: string,
  label: string,
  ariaLabel: string,
  priority: number,
  currentActive: number,
  setCurrentActive: any,
  base?: boolean,
}

const TextLink = (props: TextLinkProps) => {
  const [ active, setActive ] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActive(location.pathname === '/');
  }, [ location.pathname ]);

  const scrollIn = () => {
    navigate('/', { state: { id: props.to } });
    const section = document.getElementById(props.to)!;
    if (section && section.offsetTop) {
      window.scrollTo({ top: section.offsetTop - 100, left: 0, behavior: 'smooth' });
    }
  }

  const updateActive = () => {
    const section = document.getElementById(props.to)!;
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (((props.base && section) || (section && section.offsetTop < scroll + 108))
        && props.priority >= props.currentActive) {
      props.setCurrentActive(props.priority);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Text
      onClick={scrollIn}
      aria-label={props.ariaLabel}
      _hover={{ color: '#6BBF59', cursor: 'pointer' }}
      color={active && props.priority === props.currentActive ? '#6BBF59' : 'black'}
    >
      {props.label}
    </Text>
  )
}

const NavBar = () => {
  const [ currentActive, setCurrentActive ] = useState(0);

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
      <TextLink
        base
        priority={0}
        currentActive={currentActive}
        to='intro-section'
        label='Intrepid Panda'
        ariaLabel='link to homepage'
        setCurrentActive={setCurrentActive}
      />
      <HStack spacing='48px'>
        <TextLink
          priority={1}
          currentActive={currentActive}
          to='portfolio-section'
          label='Portfolio'
          ariaLabel='link to portfolio'
          setCurrentActive={setCurrentActive}
        />
        <TextLink
          priority={2}
          currentActive={currentActive}
          to='research-section'
          label='Research'
          ariaLabel='link to research'
          setCurrentActive={setCurrentActive}
        />
      </HStack>
    </Flex>
  );
}

export default NavBar;
