import { Link, OrderedList, ListItem, Center, Text, VStack, UnorderedList, HStack, Image } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { useEffect } from "react";

const IterativeDesign = () => {
  useEffect(() => {
    document.title='Iterative Design - Intrepid Panda';
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
            Prototyping a Note-Taking App
          </Text>

          <VStack
            id='introduction-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
              Introduction
            </Text>
            <Text>
              To practice iterative design as part of our coursework, our team of 4 created a prototype tablet app for Heptabase, a visual note-taking tool that helps you learn complex topics.
            </Text>
          </VStack>


          <VStack
            id='project-context-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
              Problem
            </Text>
            <Text>
              We attempted to solve the same problem that Heptabase's developers were trying to solve, based only on their description on <Link isExternal color='#6BBF59' href='https://www.ycombinator.com/companies/heptabase'>YCombinator</Link>. This left us with three success criteria:
            </Text>
            <OrderedList pl='40px' spacing='12px' width='100%'>
              <ListItem>Our solution must involve putting notes on whiteboards;</ListItem>
              <ListItem>It must allow users to search through their notes to support visual recall; and</ListItem>
              <ListItem>It should ultimately support a user's ability to learn complex topics.</ListItem>
            </OrderedList>
          </VStack>

          <VStack
            id='project-research-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
              Research
            </Text>
            <Text>
              We examined several existing applications for note-taking and visual design: Notion, a popular note-taking platform designed to be highly adaptable, and Figma, a web application for visual design of interfaces. We wanted to figure out what made those applications so successful so that our own app could both provide great note-taking capabilities alongside intuitive visual presentation.
            </Text>
            <Text>
              With these inspirations in mind, we created rough sketches of ways that our note-taking interface could potentially look, exploring a variety of different ideas:
            </Text>
            <UnorderedList pl='40px' spacing='12px'>
              <ListItem>We centered our user flows around either a home screen, a files page, or a whiteboard;</ListItem>
              <ListItem>We considered different primary screen orientations;</ListItem>
              <ListItem>We varied tool and menu placement, between having toolbars on page margins, buttons that reveal slide-out menus, and icons on notes themselves; and</ListItem>
              <ListItem>We laid out our file views in different ways (in grids/lists, with/without thumbnails, etc.).</ListItem>
            </UnorderedList>
            <HStack>
              <Link isExternal href='/cs1300-portfolio/sketch-1.png'>
                <Image src='/cs1300-portfolio/sketch-1.png' maxWidth='180px'/>
              </Link>
              <Link isExternal href='/cs1300-portfolio/sketch-2.png'>
                <Image src='/cs1300-portfolio/sketch-2.png' maxWidth='180px'/>
              </Link>
              <Link isExternal href='/cs1300-portfolio/sketch-3.png'>
                <Image src='/cs1300-portfolio/sketch-3.png' maxWidth='180px'/>
              </Link>
              <Link isExternal href='/cs1300-portfolio/sketch-4.png'>
                <Image src='/cs1300-portfolio/sketch-4.png' maxWidth='180px'/>
              </Link>
            </HStack>
            <Text>
              From here, we discussed what which features and layout characteristics were most to include in our app, and solicited feedback from others experienced in using note-taking software. This allowed us to distill our sketches into the following key ideas:
            </Text>
            <OrderedList pl='40px' spacing='12px'>
              <ListItem>Multi-Modal User Input:</ListItem>
              <UnorderedList spacing='12px'>
                <ListItem> Our app should support both free-hand writing/drawing and typed text, as users absorb content most effectively through different mediums.  </ListItem>
                <ListItem> It should also provide a way to quickly jot down notes with similar levels of flexibility, so that important information isn't missed due to UI inefficiencies. We initially named this concept "Napkins," but revised it to "Snippets" later to give it a more intuitive name.</ListItem>
              </UnorderedList>
              <ListItem>Flexible Organization:</ListItem>
              <UnorderedList spacing='12px'>
                <ListItem>The folder system should be as unopinionated as possible, to prevent constraining the user to a certain way of organizing (like OneNote does, with its pages/sections).</ListItem>
                <ListItem>There should also be ways to side-step bad organization, e.g. search, quick access.</ListItem>
              </UnorderedList>
            </OrderedList>
          </VStack>

          <VStack
            id='project-design-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
              Design Iterations
            </Text>

            <Text>
              Further exploration of the ideas we established from our sketches led to producing the following wireframes of our application:
            </Text>

            <HStack>
              <Link isExternal href='/cs1300-portfolio/wireframe-login.png' >
                <Image src='/cs1300-portfolio/wireframe-login.png' maxWidth='140px'/>
              </Link>
              <Link isExternal href='/cs1300-portfolio/wireframe-main.png' >
                <Image src='/cs1300-portfolio/wireframe-main.png' maxWidth='140px'/>
              </Link>
              <Link isExternal href='/cs1300-portfolio/wireframe-files.png' >
                <Image src='/cs1300-portfolio/wireframe-files.png' maxWidth='140px'/>
              </Link>
              <Link isExternal href='/cs1300-portfolio/wireframe-search.png' >
                <Image src='/cs1300-portfolio/wireframe-search.png' maxWidth='140px'/>
              </Link>
              <Link isExternal href='/cs1300-portfolio/wireframe-napkin.png' >
              <Image src='/cs1300-portfolio/wireframe-napkin.png' maxWidth='140px'/>
              </Link>
            </HStack>

            <Text>
              We further developed these wireframes into a high-fidelity prototype of our application using Figma:
            </Text>

            <HStack>
              <Link isExternal href='/cs1300-portfolio/hi-fi-login.png' >
                <Image src='/cs1300-portfolio/hi-fi-login.png' maxWidth='140px'/>
              </Link>
              <Link isExternal href='/cs1300-portfolio/hi-fi-whiteboard.png' >
                <Image src='/cs1300-portfolio/hi-fi-whiteboard.png' maxWidth='140px'/>
              </Link>
              <Link isExternal href='/cs1300-portfolio/hi-fi-edit.png' >
                <Image src='/cs1300-portfolio/hi-fi-edit.png' maxWidth='140px'/>
              </Link>
              <Link isExternal href='/cs1300-portfolio/hi-fi-search.png' >
                <Image src='/cs1300-portfolio/hi-fi-search.png' maxWidth='140px'/>
              </Link>
              <Link isExternal href='/cs1300-portfolio/hi-fi-snippet.png' >
                <Image src='/cs1300-portfolio/hi-fi-snippet.png' maxWidth='140px'/>
              </Link>
            </HStack>

            <Text>
              We presented the first iteration of our prototype to our peers to receive feedback. This feedback included the following critiques, which we tried to address through various improvements.
            </Text>

            <OrderedList pl='40px' spacing='12px'>
              <ListItem> App Navigation </ListItem>
              <UnorderedList spacing='12px'>
                <ListItem>[Feedback] Reviewers didn't expect to be sent to a whiteboard right after logging in.</ListItem>
                <ListItem>[Improvement] To provide a better mental model of app navigation, we modified our app to instead direct users to the files page, which now acts as a home screen. We also fleshed out the files page structure to be more easily navigable through the use of breadcrumbs. </ListItem>
              </UnorderedList>

              <ListItem> Feature Learnability </ListItem>
              <UnorderedList spacing='12px'>
                <ListItem>[Feedback] It was unclear what snippets were for and how to use them.</ListItem>
                <ListItem>[Improvement] To enhance learnability, we added instructional placeholder text to new snippets to help explain their purpose and usage to first-time users and testers.</ListItem>
              </UnorderedList>

              <ListItem> File and Folder Creation </ListItem>s
              <UnorderedList spacing='12px'>
                <ListItem>[Feedback] It wasn't immediately obvious how new files, folders, etc. could be created.</ListItem>
                <ListItem>[Improvement] We added a "create" section to the files page, which allows users to more efficiently create new whiteboards, folders, and/or snippets. Since this is an integral part of most user's workflow upon opening the app, we made sure to draw attention to this functionality by placing it in a conspicuous area.</ListItem>
              </UnorderedList>
            </OrderedList>

            <Text>
              We incorporated all of the above feedback in designing the final iteration of our prototype, found <Link color='#6BBF59' isExternal href='https://www.figma.com/proto/8aMkwjf3cH4HnFvhJfVHml/Iterative-Design?node-id=115%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=115%3A2'>here</Link>.
            </Text>
          </VStack>

          <VStack
            id='project-conclusion-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
              Conclusions
            </Text>

            <Text>
              One important takeaway from designing this interface was the necessity of balancing powerful features with ease-of-use. Note-taking applications in general have a lot of moving parts: our app includes a main whiteboard interface for taking notes, a file organization system, search functionality, and quick-note functionality in the form of Snippets. When an application becomes so loaded, it can be hard to create an interface that supports all these features while at the same time because easy to learn.
            </Text>
            <Text>
              With the logic that note-taking software tends to be picked up for long-term use, we initially decided that it would be a worthwhile cost to sacrifice a bit of learnability for the purpose of ensuring that users had a full range of control over organization of their notes. However, from the feedback we were given, we realized that despite the focus on designing the app for long-term use, we still had to make more considerations for users still learning the software. There were ways that we could restructure the layout so that it could be more intuitive to both first-time users and long-term users. We were also pushed to find ways of enabling complexity in terms of features without forcing this complexity onto the user.
            </Text>
            <Text>
              In a full version of this application, there would likely be many more features for which to consider the complexity-usability balance, where it may become necessary to hide more complex features from newer users so as not to confuse them. While we only designed a prototype for the application, we already obtained valuable experience in considering interface from both ends of the spectrum!
            </Text>
          </VStack>
        </VStack>
      </Center>
    </motion.div>
  )

}

export default IterativeDesign;