import { Center, VStack, OrderedList, ListItem, UnorderedList, HStack, Text, Link, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Redesign = () => {
  useEffect(() => {
    document.title='Responsive Redesign -  Intrepid Panda';
    window.scrollTo(0, 0);
  }, []);

  return(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Center>
        <VStack
          paddingTop='72px'
          width='700px'
          maxWidth='100%'
          spacing='60px'
        >
          <Text fontSize='4xl' width='100%'>
            Redesigning Fandom
          </Text>

          <VStack
            id='project-introduction-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
              Introduction
            </Text>
            <Text>
              For this assignment for CSCI 1300, I worked on redesigning a webpage of my choice to improve its usability, learnability, and memorability.
            </Text>
          </VStack>

          <VStack
            id='project-context-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
              Context
            </Text>
            <Text>
              I chose to redesign <Link isExternal href='https://starwars.fandom.com/wiki/R2-D2'> a page from Wookieepedia</Link>, the Star Wars Fandom site. The reason I chose the page was because I felt that it was very annoying to navigate, both on mobile and on desktop, due to the poor use of screenspace from advertisements and the lengthy content.
            </Text>

            <Text width='100%'>
              The original website can be found at <Link isExternal color='#6BBF59' href='https://starwars.fandom.com/wiki/R2-D2'>https://starwars.fandom.com/wiki/R2-D2</Link>
            </Text>

            <Text width='100%'>
              The redesigned website can be found at <Link isExternal color='#6BBF59' href='https://intrepidpanda123.github.io/responsive-redesign/'>https://intrepidpanda123.github.io/responsive-redesign/</Link>
            </Text>

            <Text fontSize='2xl' width='100%'>
              Identifying Problems
            </Text>

            <Text>
              First, I worked on identifying problems with the usability, learnability, and memorability of the original webpage.
            </Text>

            <Text fontSize='1xl' width='100%'>
              Usability Issues:
            </Text>
            <OrderedList spacing='12px' width='100%' pl='40px'>
              <ListItem> The top 50% of the screen is taken up by an advertisement, which means that none of the main content is actually visible upon initially loading the page </ListItem>
              <ListItem> The left sidebar contains links to irrelevant content, which is distracting </ListItem>
              <ListItem> Searching the wiki is annoying, since it requires opening a popup </ListItem>
              <ListItem> The table of contents is extremely long and delays the main content of the article </ListItem>
            </OrderedList>

            <Text fontSize='1xl' width='100%'>
              Learnability Issues:
            </Text>
            <OrderedList spacing='12px' width='100%' pl='40px' start={5}>
              <ListItem> Users may not know how to access the table of contents throughout the page, since it is opened by a relatively inconspicuous button </ListItem>
              <ListItem> Closing the intrusive video and banner advertisements is unintuitive, since the close button can be sometimes hard to find </ListItem>
            </OrderedList>

            <Text fontSize='1xl' width='100%'>
              Memorability Issues:
            </Text>
            <OrderedList spacing='12px' width='100%' pl='40px' start={7}>
              <ListItem> It's too clunky to leave the table of contents open while scrolling through the article, so it can be hard to remember the article layout, especially given how long the article is </ListItem>
              <ListItem> Users may have difficulty keeping track of their progress in the article, since there's no indicator for this </ListItem>
            </OrderedList>
          </VStack>

          <VStack
            id='project-research-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
              Visual Redesign
            </Text>

            <Text fontSize='2xl' width='100%'>
              Low-Fidelity Wireframing
            </Text>

            <div>
              <Link isExternal href='/cs1300-portfolio/lo-fi-1.png'>
                <Image
                  src='/cs1300-portfolio/lo-fi-1.png'
                  maxWidth='360px'
                />
              </Link>
              <Text align='center' width='100%' fontSize='xs' mt='8px'>
                Low-fidelity mobile redesign
              </Text>
            </div>
            <Text>
              We have rearranged the page content so that the advertising banner does not take up most of the screen. Advertising has been moved until after the article introduction so that the user can receive content before being subjected to advertisements (point 1). Other changes include making the navigation and close buttons more prominent to increase learnability for the interface (points 5 and 6). We introduce collapsible components so that users don't have to scroll excessively to find what they want (point 4). Additionally, the search bar no longer creates a popup (point 3). Points 7 and 8 are elaborated upon the in desktop redesign.
            </Text>

            <div>
              <Link isExternal href='/cs1300-portfolio/lo-fi-2.png'>
                <Image
                  src='/cs1300-portfolio/lo-fi-2.png'
                  maxWidth='360px'
                />
              </Link>
              <Text align='center' width='100%' fontSize='xs' mt='8px'>
                Low-fidelity tablet redesign
              </Text>
            </div>
            <Text>
              The changes are mostly the same as those made for the mobile layout. The few differences include the persistent search bar, compared to the search bar on mobile, which needed a click to open. The additional horizontal space allows for some more flexibility in terms of layout.
            </Text>

            <div>
              <Link isExternal href='/cs1300-portfolio/lo-fi-3.png'>
                <Image
                  src='/cs1300-portfolio/lo-fi-3.png'
                  maxWidth='360px'
                />
              </Link>
              <Text align='center' width='100%' fontSize='xs' mt='8px'>
                Low-fidelity desktop redesign
              </Text>
            </div>
            <Text>
              With the large horizontal space available on desktop, we can create elegant solutions to points 7 and 8. A fixed left sidebar contains the Table of Contents outline for the document, which the user can refer to at any time, in addition to allowing the user to navigate the page using skip links. The current section of the article that they are browsing will also be highlighted within the outline, so that the user can track their progress within the document. The fixed right sidebar returns some space for the advertisements that we removed from the original layout. This layout also brings back the top bar navigation options that were available in the original layout.
            </Text>

            <Text fontSize='2xl' width='100%'>
              High-Fidelity Prototyping
            </Text>
            <HStack>
              <Link isExternal href='/cs1300-portfolio/13 Pro - 1.png'>
                <Image
                  src='/cs1300-portfolio/13 Pro - 1.png'
                  maxWidth='180px'
                  shadow='base'
                />
              </Link>
              <Link isExternal href='/cs1300-portfolio/13 Pro - 2.png'>
                <Image
                  src='/cs1300-portfolio/13 Pro - 2.png'
                  maxWidth='180px'
                  shadow='base'
                />
              </Link>
              <Link isExternal href='/cs1300-portfolio/13 Pro - 3.png'>
                <Image
                  src='/cs1300-portfolio/13 Pro - 3.png'
                  maxWidth='180px'
                  shadow='base'
                />
              </Link>
            </HStack>
            <Text align='center' width='100%' fontSize='xs' pb='48px'>
              Mobile Redesign
            </Text>

            <HStack>
              <Link isExternal href='/cs1300-portfolio/iPad Pro 11_ - 1.png'>
                <Image
                  src='/cs1300-portfolio/iPad Pro 11_ - 1.png'
                  maxWidth='240px'
                  shadow='base'
                />
              </Link>
              <Link isExternal href='/cs1300-portfolio/iPad Pro 11_ - 2.png'>
                <Image
                  src='/cs1300-portfolio/iPad Pro 11_ - 2.png'
                  maxWidth='240px'
                  shadow='base'
                />
              </Link>
            </HStack>
            <Text align='center' width='100%' fontSize='xs' pb='48px'>
              Tablet Redesign
            </Text>

          <Image
            src='/cs1300-portfolio/Desktop - 1.png'
            maxWidth='720px'
          />
          <Text align='center' width='100%' fontSize='xs'>
            Desktop Redesign
          </Text>
          </VStack>

          <VStack
            id='project-conclusion-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
              Results
            </Text>
            <Text>
              The redesigned website, found <Link isExternal color='#6BBF59' href='https://intrepidpanda123.github.io/responsive-redesign/'>here</Link>, showcases the changes made to the usability of the Fandom webpage layout. While still relatively unpolished, the redesigned webpage has improved screen-space usage, and UI elements are more intuitive and clearly visible. Further work can be done to the redesign to bring back some more character and charm while building off the improved page structure.
            </Text>
          </VStack>
        </VStack>
      </Center>

    </motion.div>
  )
}

export default Redesign;