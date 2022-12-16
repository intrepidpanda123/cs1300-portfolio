import { Center, VStack, OrderedList, ListItem, HStack, Text, Link, Image, UnorderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import EmpathyMap from "../uiux-coursework/EmpathyMap";
import Storyboard from "../uiux-coursework/Storyboard";

const ryanPersona = {
  thinks: [
    'What even is osmanthus tea? Ah, whatever, who cares...',
    'I\'m not sure if I\'d like those other drinks, so I\'ll get my usual.',
    'I\'ll get 70% ice, 50% sugar, and whole milk, just like I always do!',
    'Looking forward to getting my favorite drink again!',
  ],
  feels: [
    'Eager to get his drink',
    'Confident that he will enjoy his order',
    'Unsure about trying other drinks',
    'A little intimidated by all the other options',
  ],
  says: [
    'This drink is amazing, you\'ve got to try it!',
    'The only time I get a different drink is if they sell out.',
    'It\'s their most popular drink for a good reason!',
  ],
  does: [
    'Immediately selects his favorite drink',
    'Fills out his order customization very quickly',
    'Skips over looking at the rest of the menu',
  ],
};

const nelliePersona = {
  thinks: [
    'Hmm, I always have a hard time deciding what to get.',
    'What am I in the mood for today? How about a milk tea?',
    'Huh, I wonder what the difference is between these two drinks...',
    'There\'s so many choices!!',
  ],
  feels: [
    'Excited to try out a new drink',
    'Unsure about what the drink will taste like',
    'Not confident in whether she made the right decision',
    'A little pressured by the line, since she needs time to think',
  ],
  says: [
    'Huh, does anyone have any recommendations?',
    'Have you tried the mango green tea before? It sounds interesting!',
    'Ugh, I hate having to choose just one!',
    'Do you think I could get a sip of your drink?',
  ],
  does: [
    'Scrolls through the menu thoroughly',
    'Takes some time deciding which add-ons she should get.',
    'Asks her friends for recommendations',
  ],
};


const Personas = () => {
  useEffect(() => {
    document.title='Personas and Storyboarding - Intrepid Panda';
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
            Ten One Tea House Ordering
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
              As part of my coursework for CSCI 1300 (User Interfaces and User Experience), I performed research on an interface of my choice. This included interviewing users about their experience, creating personas based on these users, and making storyboards for one of these personas.
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
              I chose to take a look at the Snackpass kiosk at Ten One Tea House, located at 216 Thayer St, Providence, RI 02906. Guests at Ten One will often place their drink orders at the kiosk without needing to interact with the barista. I've personally used the kiosk several times before and wanted to get some insight into the experience of other users of the interface.
            </Text>

            <Text width='100%'>
              Below are a couple sketches of the interface:
            </Text>

            <Link isExternal href='/cs1300-portfolio/tenone-screen-1.png'>
              <Image
                src='/cs1300-portfolio/tenone-screen-1.png'
                maxWidth='720px'
                shadow='base'
              />
            </Link>

            <Text>
              The above image displays the main menu screen for the Ten One kiosk. Images of the drink options are displayed, along with their prices. Users can scroll down, use the navigation bar, or use the search bar to find other drinks. Clicking on a drink brings the user to the next screen:
            </Text>
            <Link isExternal href='/cs1300-portfolio/tenone-screen-2.png'>
              <Image
                src='/cs1300-portfolio/tenone-screen-2.png'
                maxWidth='720px'
                shadow='base'
              />
            </Link>
            <Text>
              This screen allows users to customize their drinks. The extent of customization depends on the drink, with some drinks having more or fewer options than others. Each of the customization options also has its price attached to it. The total pre-tax price of the drink is displayed on the 'Add to Cart' button. After adding the drinks they want to their cart, the user gives their phone number to receive order updates, and then proceeds to check out using the attached card reader.
            </Text>
          </VStack>

          <VStack
            id='project-research-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
              Observing Users
            </Text>

            <Text width='100%'>
              I then observed three users and their interactions  with the ordering kiosk:
            </Text>

            <UnorderedList spacing='12px' width='100%' pl='40px'>
              <ListItem>
                The first user had some initial confusion with the difference between two of the 'Popular' menu items, specifically between the 'Brown Sugar Boba Milk Tea' and the 'Brown Sugar Boba with Fresh Milk.' He then picked one of them at random, quickly chose a customization option, and checked out. He adjusted the tip value from the default of 2 dollars to 0 dollars.
              </ListItem>
              <ListItem>
                The second user I observed did not scroll around or explore the interface much. He picked a drink immediately from the 'Popular' section of the menu, chose a customization option quickly, and checked out. He adjusted the tip value from the default of 2 dollars to 1 dollar.
              </ListItem>
              <ListItem>
                The third user took the most time exploring the drink options compared to the others. He scrolled up and down several times, skipping and returning to sections, before settling upon a drink that he liked. He took a bit of time to read through the customization options before checking out. Like the first user, he chose to withhold a tip, while also expressing annoyance at the default value being set to 2 dollars.
              </ListItem>
            </UnorderedList>

            <Text width='100%'>
              Afterwards, I interviewed the users with the following list of the questions to gain insight into their experience using the interface:
            </Text>

            <OrderedList spacing='12px' width='100%' pl='40px'>
              <ListItem>
                What drew your immediate attention when using the kiosk?
              </ListItem>
              <ListItem>
                How was the experience of finding the drink(s) you were looking for? Did you find anything confusing?
              </ListItem>
              <ListItem>
                Did you feel like any of the drinks were being advertised more than others? How much of the menu did you feel was easily accessible to you?
              </ListItem>
              <ListItem>
                What kind of information was most helpful in picking out which drink to order? Was this information made clear to you? Was there enough information for any dietary considerations?
              </ListItem>
              <ListItem>
                Why did you pick the drink that you did? Do you feel the interface influenced your decision in any way?
              </ListItem>
              <ListItem>
                How well do you feel the kiosk communicated the possible ways to pay for your drink?
              </ListItem>
              <ListItem>
                Did the tipping interface make you feel expected or suggested to tip? If you did feel expected to tip, why was this?
              </ListItem>
              <ListItem>
                How did the interface communicate when your order would be ready? Did this feel reliable?
              </ListItem>
            </OrderedList>
          </VStack>

          <VStack
            id='project-results-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
              Results
            </Text>

            <Text width='100%'>
              Below is a summary of the trends in the user responses:
            </Text>

            <UnorderedList spacing='12px' width='100%' pl='40px'>
              <ListItem>
                Several of the users expressed that they felt that some of the menu items could've used additional information. For example, one user that was very sensitive to caffeine complained that they couldn't tell which drinks had caffeine in them. Another user said they were curious about a drink that said 'with flower,' except they didn't know what kind of flower it was.
              </ListItem>
              <ListItem>
                All of the users agreed that the menu did a relatively decent job at displaying the multitude of drink options that were available. However, they still agreed that the non-featured drinks on the menu were relatively hidden, due to having to scroll down to find them.
              </ListItem>
              <ListItem>
                One of the users picked their drink based off of what was 'Popular' in the menu, along with the visual appeal of the drink. Another user explained that he always orders that specific drink on the menu, since it tastes the best to him.
              </ListItem>
              <ListItem>
                Another trend that I noticed was that of the two users that chose not to tip, both were unsatisfied that the interface had a default tip value set of 2 dollars. The third user felt inclined to tip baristas in general, but 1 dollar made more sense to them.
              </ListItem>
              <ListItem>
                None of the users expected the system to notify them of their order completion, choosing instead to observe the barista to see when their drinks were ready. Two of the users expressed distrust in the notification system, having had bad experiences with it before.
              </ListItem>
            </UnorderedList>
          </VStack>

          <VStack
            id='project-analysis-section'
            width='100%'
            spacing='24px'
          >
            <Text fontSize='3xl' width='100%'>
              Analysis
            </Text>
            <Text fontSize='2xl' width='100%'>
              Empathy Maps
            </Text>

            <Text width='100%'>
              From these responses, I created empathy maps to characterize example personas for typical users of the ordering kiosk:
            </Text>

            <Text fontSize='xl' width='100%'>
              Regular Ryan:
            </Text>

            <Text width='100%'>
              Regular Ryan knows exactly what he prefers and usually orders his favorite drink, customized just the way that he likes it. If it ain't broke, don't fix it!
            </Text>

            <EmpathyMap
              personaName='Regular Ryan'
              persona={ryanPersona}
            />

            <Text>
              Ryan really only is looking for one or two drinks on the menu; he doesn't particularly care about trying new drinks. As such, he wants an interface that makes it easy to find and customize the drink he's looking for. Ryan doesn't want to spend too long, so he prefers a streamlined interface that doesn't have too many extra steps.
            </Text>
            <Text>
              This persona represents some of the users of my chosen interface, specifically those that don't like to spend too much time figuring out what they want to order. During my observations, some users didn't explore much of the menu, but rather chose from the 'Popular' section of the menu without much need for thought. When I interviewed them, they explained that they had a preferred drink that they always ordered, because they knew that it tasted good. They didn't feel the need to try out other drinks that could possibly be a waste of money if the drinks didn't taste good.
            </Text>

            <Text fontSize='xl' width='100%'>
              Newbie Nellie:
            </Text>

            <Text width='100%'>
              Newbie Nellie isn't quite sure what she should order. Her friends dragged her here, and she doesn't come here very often, so she doesn't know the menu all that well. Hmm, those fruit teas look pretty tasty... Wait, but the seasonal special sounds just as good!
            </Text>

            <EmpathyMap
              personaName='Newbie Nellie'
              persona={nelliePersona}
            />

            <Text>
              Nellie has a hard time deciding what to get! She doesn't have a go-to drink, so she's interested in trying out anything that sounds tasty. She wants an interface that can give her as much information as possible about each of the drinks so she can make an informed opinion about what to order. Detailed descriptions of the drinks and ingredients along with suggestions from the interface could be helpful to her.
            </Text>
            <Text>
              This persona represents some of the users of my chosen interface, specifically those that spent some time trying to figure out what they should get. I observed that two of the users weren't completely familiar with the menu, and were slightly confused by all the different options available to them. As such, they took a bit more time to figure out exactly what they wanted. There was also a common trend in that all the users felt that the menu could've included more information to help them make their choices.
            </Text>

            <Text fontSize='2xl' width='100%'>
              Storyboarding
            </Text>
            <Text>
              Finally, I created a storyboard to depict a typical interaction that a Newbie Nellie-type user might have with the interface:
            </Text>
            <Storyboard />
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
              Overall, I enjoyed conducting UI research and getting the opportunity to understand how users perceive and interact with interfaces in the real world. 
            </Text>
          </VStack>
        </VStack>
      </Center>
    </motion.div>
  )
}

export default Personas;