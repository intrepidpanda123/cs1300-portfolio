import { ListItem, Heading, Image, OrderedList, Text, Box, UnorderedList } from "@chakra-ui/react";
import { useEffect } from "react";
import '../index.css';
import EmpathyMap from "./EmpathyMap";
import Storyboard from "./Storyboard";

const styles = {
  container: {
    maxWidth: 'min(800px, 100%)',
    margin: '64px auto',
  },
  headingLg: {
    marginBottom: '16px',
  },
  heading2xl: {
    marginBottom: '24px',
  },
  text: {
    marginBottom: '12px',
  },
  section: {
    marginBottom: '24px',
  },
  list: {
    marginLeft: '40px',
    marginBottom: '12px',
  },
  image: {
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'teal',
    maxWidth: '800px',
    marginTop: '24px',
    marginBottom: '24px',
  },
  mapWrapper: {
    margin: '24px auto 24px',
  }
}

const PersonasAndStoryboarding = () => {
  useEffect(() => {
    document.title = 'Personas and Storyboarding';
  });

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

  return (
    <div style={styles.container}>
      <Heading style={styles.heading2xl} size='2xl'>
        Personas and Storyboarding
      </Heading>
      <div style={styles.section}>
        <Heading style={styles.headingLg} size='lg'>
          Overview
        </Heading>
        <Text style={styles.text}>
          As part of my coursework for CSCI 1300 (User Interfaces and User Experience), I performed research on an interface of my choice. This included interviewing users about their experience, creating personas based on these users, and making storyboards for one of these personas.
        </Text>
        <Text style={styles.text}>
          I chose to take a look at the Snackpass kiosk at Ten One Tea House, located at 216 Thayer St, Providence, RI 02906. Guests at Ten One will often place their drink orders at the kiosk without needing to interact with the barista. I've personally used the kiosk several times before and wanted to get some insight into the experience of other users of the interface.
        </Text>
      </div>
      <div style={styles.section}>
        <Heading style={styles.headingLg} size='lg'>
          Part 1. Preparation
        </Heading>
        <Text style={styles.heading2xl}>
          I made a sketch to familiarize myself with the interface:
        </Text>
        <Image
          src='/cs1300-portfolio/tenone-screen-1.png'
          fit='scale-down'
          style={{...styles.image, maxWidth: 'min(800px, 100%)'}}
          />
        The above image displays the main menu screen for the Ten One kiosk. Images of the drink options are displayed, along with their prices. Users can scroll down, use the navigation bar, or use the search bar to find other drinks. Clicking on a drink brings the user to the next screen:
        <Image
          src='/cs1300-portfolio/tenone-screen-2.png'
          fit='scale-down'
          style={{...styles.image, maxWidth: 'min(800px, 100%)'}}
          />
        <Text style={styles.text}>
          This screen allows users to customize their drinks. The extent of customization depends on the drink, with some drinks having more or fewer options than others. Each of the customization options also has its price attached to it. The total pre-tax price of the drink is displayed on the "Add to Cart" button. After adding the drinks they want to their cart, the user gives their phone number to receive order updates, and then proceeds to check out using the attached card reader.
        </Text>
      </div>
      <div style={styles.section}>
        <Heading style={styles.headingLg} size='lg'>
          Part 2. Recording Observations
        </Heading>
        <Text style={styles.text}>
          The first user had some initial confusion with the difference between two of the "Popular" menu items, specifically between the "Brown Sugar Boba Milk Tea" and the "Brown Sugar Boba with Fresh Milk." He then picked one of them at random, quickly chose a customization option, and checked out. He adjusted the tip value from the default of 2 dollars to 0 dollars.
        </Text>
        <Text style={styles.text}>
          The second user I observed did not scroll around or explore the interface much. He picked a drink immediately from the "Popular" section of the menu, chose a customization option quickly, and checked out. He adjusted the tip value from the default of 2 dollars to 1 dollar.
        </Text>
        <Text style={styles.text}>
          The third user took the most time exploring the drink options compared to the others. He scrolled up and down several times, skipping and returning to sections, before settling upon a drink that he liked. He took a bit of time to read through the customization options before checking out. Like the first user, he chose to withhold a tip, while also expressing annoyance at the default value being set to 2 dollars.
        </Text>
        <Text style={styles.text}>
          Afterwards, I interviewed the users with the following list of the questions to gain insight into their experience using the interface:
        </Text>
        <OrderedList style={styles.list}>
          <Text as={ListItem}>
            What drew your immediate attention when using the kiosk?
          </Text>
          <Text as={ListItem}>
            How was the experience of finding the drink(s) you were looking for? Did you find anything confusing?
          </Text>
          <Text as={ListItem}>
            Did you feel like any of the drinks were being advertised more than others? How much of the menu did you feel was easily accessible to you?
          </Text>
          <Text as={ListItem}>
            What kind of information was most helpful in picking out which drink to order? Was this information made clear to you? Was there enough information for any dietary considerations?
          </Text>
          <Text as={ListItem}>
            Why did you pick the drink that you did? Do you feel the interface influenced your decision in any way?
          </Text>
          <Text as={ListItem}>
            How well do you feel the kiosk communicated the possible ways to pay for your drink?
          </Text>
          <Text as={ListItem}>
            Did the tipping interface make you feel expected or suggested to tip? If you did feel expected to tip, why was this?
          </Text>
          <Text as={ListItem}>
            How did the interface communicate when your order would be ready? Did this feel reliable?
          </Text>
        </OrderedList>
        A couple of trends in their responses that stood out to me:
        <UnorderedList style={styles.list}>
          <Text as={ListItem}>
            Several of the users expressed that they felt that some of the menu items could've used additional information. For example, one user that was very sensitive to caffeine complained that they couldn't tell which drinks had caffeine in them. Another user said they were curious about a drink that said "with flower," except they didn't know what kind of flower it was.
          </Text>
          <Text as={ListItem}>
            All of the users agreed that the menu did a relatively decent job at displaying the multitude of drink options that were available. However, they still agreed that the non-featured drinks on the menu were relatively hidden, due to having to scroll down to find them.
          </Text>
          <Text as={ListItem}>
            One of the users picked their drink based off of what was "Popular" in the menu, along with the visual appeal of the drink. Another user explained that he always orders that specific drink on the menu, since it tastes the best to him.
          </Text>
          <Text as={ListItem}>
            Another trend that I noticed was that of the two users that chose not to tip, both were unsatisfied that the interface had a default tip value set of 2 dollars. The third user felt inclined to tip baristas in general, but 1 dollar made more sense to them.
          </Text>
          <Text as={ListItem}>
            None of the users expected the system to notify them of their order completion, choosing instead to observe the barista to see when their drinks were ready. Two of the users expressed distrust in the notification system, having had bad experiences with it before.
          </Text>
        </UnorderedList>
      </div>
      <div style={styles.section}>
        <Heading style={styles.headingLg} size='lg'>
          Part 3. Personas
        </Heading>
        <Heading style={styles.headingLg} size='md'>
          Empathy Map 1: Regular Ryan
        </Heading>
        <Text style={styles.text}>
          Regular Ryan knows exactly what he prefers and usually orders his favorite drink, customized just the way that he likes it. If it ain't broke, don't fix it!
        </Text>
        <Box style={styles.mapWrapper}>
          <EmpathyMap
            personaName='Regular Ryan'
            persona={ryanPersona}
          />
        </Box>
        <Text style={styles.text}>
          Ryan really only is looking for one or two drinks on the menu; he doesn't particularly care about trying new drinks. As such, he wants an interface that makes it easy to find and customize the drink he's looking for. Ryan doesn't want to spend too long, so he prefers a streamlined interface that doesn't have too many extra steps.
        </Text>
        <Text style={styles.text}>
          This persona represents some of the users of my chosen interface, specifically those that don't like to spend too much time figuring out what they want to order. During my observations, some users didn't explore much of the menu, but rather chose from the "Popular" section of the menu without much need for thought. When I interviewed them, they explained that they had a preferred drink that they always ordered, because they knew that it tasted good. They didn't feel the need to try out other drinks that could possibly be a waste of money if the drinks didn't taste good.
        </Text>
        <Heading style={styles.headingLg} size='md'>
          Empathy Map 2: Newbie Nellie
        </Heading>
        <Text style={styles.text}>
          Newbie Nellie isn't quite sure what she should order. Her friends dragged her here, and she doesn't come here very often, so she doesn't know the menu all that well. Hmm, those fruit teas look pretty tasty... Wait, but the seasonal special sounds just as good!
        </Text>
        <Box style={styles.mapWrapper}>
        <EmpathyMap
          personaName='Newbie Nellie'
          persona={nelliePersona} />
        </Box>
        <Text style={styles.text}>
          Nellie has a hard time deciding what to get! She doesn't have a go-to drink, so she's interested in trying out anything that sounds tasty. She wants an interface that can give her as much information as possible about each of the drinks so she can make an informed opinion about what to order. Detailed descriptions of the drinks and ingredients along with suggestions from the interface could be helpful to her.
        </Text>
        <Text style={styles.text}>
          This persona represents some of the users of my chosen interface, specifically those that spent some time trying to figure out what they should get. I observed that two of the users weren't completely familiar with the menu, and were slightly confused by all the different options available to them. As such, they took a bit more time to figure out exactly what they wanted. There was also a common trend in that all the users felt that the menu could've included more information to help them make their choices.
        </Text>
      </div>
      <div style={styles.section}>
        <Heading style={styles.headingLg} size='lg'>
          Part 4. Storyboards
        </Heading>
        <Text style={styles.text}>
          Below is a storyboard I created for the Newbie Nellie persona:
        </Text>
        <Storyboard />
      </div>
    </div>
  );
}

export default PersonasAndStoryboarding;
