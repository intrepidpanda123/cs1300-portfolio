import { Center, VStack, OrderedList, ListItem, HStack, Text, Link, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const EyeTracking = () => {
  useEffect(() => {
    document.title='Eye Tracking -  Intrepid Panda';
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
            Eye Tracking for a Bakery Website
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
              As part of our coursework on User Interfaces and User Experiences, my group and I performed an eye-tracking study to compare how different webpage layouts affected where users' attention was being directed.
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
              The page we chose to analyze was a homepage for a hypothetical bakery. It is important to know where users' attention is being drawn to for a bakery homepage for several reasons:
            </Text>
            <OrderedList spacing='12px' width='100%' pl='40px'>
              <ListItem> Users must be able to figure out whether the bakery has what they're looking for, either using a menu or photos </ListItem>
              <ListItem> Users must be able to figure out their options for purchasing from that bakery, such as through pickup, delivery, or online order </ListItem>
            </OrderedList>

            <Text>
              In essence, we want to make sure the most important information on the page is easily noticeable by the user to make it as smooth as possible to navigate the webpage.
            </Text>
          </VStack>

          <VStack
            id='project-research-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
            Design Choices and Methodology
            </Text>

            <Text>
              We designed two sample bakery webpages with contrasting layouts to see how users would react differently to them. The designs are displayed below:
            </Text>

            <HStack>
              <div>
                <Link isExternal href='/cs1300-portfolio/screenshot1.jpg'>
                  <Image
                    src='/cs1300-portfolio/screenshot1.jpg'
                    maxWidth='360px'
                    shadow='base'
                  />
                </Link>
                <Text align='center' width='100%' fontSize='xs' mt='8px'>
                  Version A
                </Text>
              </div>
              <div>
                <Link isExternal href='/cs1300-portfolio/screenshot2.jpg'>
                  <Image
                    src='/cs1300-portfolio/screenshot2.jpg'
                    maxWidth='360px'
                    shadow='base'
                  />
                </Link>
                <Text align='center' width='100%' fontSize='xs' mt='8px'>
                  Version B
                </Text>
              </div>
            </HStack>

            <Text>
              We constructed Version A in a horizontal format, with a contact sidebar on the left, main information in the middle, and images to the right and bottom. This layout was an efficient use of the space available on the screen to display essential information alongside auxiliary images. In exchange, the images could be distracting to users trying to focus on the essential information.
            </Text>

            <Text>
              Version B, in contrast, takes a vertical approach, with essential information made available at the top of the page, and auxiliary images at the bottom. This approach isolates the essential information and places it front and center, but there is a lot more blank space on the page. This results in a very information-dense section of the page, while the remainder is sparse.
            </Text>

            <Text>
              We acquired eye-tracking data from two volunteers. Each volunteer only ever viewed a single one of the two versions. This was done so that the pages would not be viewed with preconceived notions about the layout in mind. Prior to viewing the page, each volunteer was given the same task: "Find where in the page you would go to order for pickup."
            </Text>


          </VStack>

          <VStack
            id='project-results-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
              Results
            </Text>

            <Text>
              The results of the eye-tracking experiment can be visualized through a heatmap below, where the "hotter" parts of the image are where the users tended to focus their attention:
            </Text>

            <HStack>
              <div>
                <Link isExternal href='/cs1300-portfolio/heatmap1.png'>
                  <Image
                    src='/cs1300-portfolio/heatmap1.png'
                    maxWidth='360px'
                    shadow='base'
                  />
                </Link>
                <Text align='center' width='100%' fontSize='xs' mt='8px'>
                  Version A
                </Text>
              </div>
              <div>
                <Link isExternal href='/cs1300-portfolio/heatmap2.png'>
                  <Image
                    src='/cs1300-portfolio/heatmap2.png'
                    maxWidth='360px'
                    shadow='base'
                  />
                </Link>
                <Text align='center' width='100%' fontSize='xs' mt='8px'>
                  Version B
                </Text>
              </div>
            </HStack>

            <Text>
              The results were more-or-less inline with our expectations: the horizontal layout resulted in the user's attention being spread out across the page more in comparison to the vertical layout, where the user focused in directly upon the task we had asked them to do.
            </Text>

            <Text>
              Whereas the user for Version A briefly glanced at the images, most of their attention was focused on the intended task. On the other hand, the user for Version B practically only focused on the intended task, and spent almost no time looking at the images.
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
              The varying results produced by the two layouts highlights the importance of the webpage design in making it easier or harder for the user to find what they are looking for. Whether a more focused or a more spread-out layout is better would depend on the intentions of those designing the webpage. Each have their own pros and cons. Presenting interesting images for the user to look at might increase their aesthetic opinion of the website, or entice them to order something they may not have thought of originally. On the other hand, fewer distractions can allow the user to more easily find the information they are looking for. Overall, it was really fun to finally get to see the practical impacts of the different interfaces I design!
            </Text>
          </VStack>
        </VStack>
      </Center>

    </motion.div>
  )
}

export default EyeTracking;