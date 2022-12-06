import { SimpleGrid, Heading, Image, Link, ListItem, Text, OrderedList } from "@chakra-ui/react";
import { useEffect } from "react";

const ResponsiveRedesign = () => {
  useEffect(() => {
    document.title = 'Responsive Redesign';
  });

  const styles = {
    container: {
      maxWidth: 'min(800px, 100%)',
      margin: '64px auto',
    },
    heading2xl: {
      marginBottom: '24px',
    },
    headingLg: {
      marginBottom: '16px',
    },
    headingMd: {
      marginBottom: '12px',
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
      maxWidth: '600px',
      margin: '24px 0px',
    },
    link: {
      color: 'teal',
    }
  }

  return (
    <div style={styles.container}>
      <Heading style={styles.heading2xl} size='2xl'> Responsive Redesign </Heading>

      <Text style={styles.text}>
        For this assignment for CSCI 1300, I worked on redesigning a webpage of my choice to improve its usability, learnability, and memorability.
      </Text>

      <Heading style={styles.headingLg} size='lg'> Part 1: Identifying Usability Problems </Heading>

      <Heading style={styles.headingMd} size='md'> Picking a Web Page </Heading>

      <Text style={styles.text}>
        I chose to redesign <Link style={styles.link} isExternal href='https://starwars.fandom.com/wiki/R2-D2'>a page from Wookieepedia</Link>, the Star Wars Fandom site. The reason I chose the page was because I felt that it was very annoying to navigate, both on mobile and on desktop, due to the poor use of screenspace from advertisements and the lengthy content.
      </Text>

      <Image
        src='/cs1300-portfolio/r2d2-article-screenshot.png'
        fit='scale-down'
        style={{...styles.image, maxWidth: 'min(800px, 100%)'}}
      />

      <Heading style={styles.headingMd} size='md'> Finding Problems </Heading>

      <Text style={styles.text}>
        Usability Issues:
      </Text>
      <OrderedList style={styles.list}>
        <ListItem> The top 50% of the screen is taken up by an advertisement, which means that none of the main content is actually visible upon initially loading the page </ListItem>
        <ListItem> The left sidebar contains links to irrelevant content, which is distracting </ListItem>
        <ListItem> Searching the wiki is annoying, since it requires opening a popup </ListItem>
        <ListItem> The table of contents is extremely long and delays the main content of the article </ListItem>
      </OrderedList>

      <Text style={styles.text}>
        Learnability Issues:
      </Text>
      <OrderedList start={5} style={styles.list}>
        <ListItem> Users may not know how to access the table of contents throughout the page, since it is opened by a relatively inconspicuous button </ListItem>
        <ListItem> Closing the intrusive video and banner advertisements is unintuitive, since the close button can be sometimes hard to find </ListItem>
      </OrderedList>

      <Text style={styles.text}>
        Memorability Issues:
      </Text>
      <OrderedList start={7} style={styles.list}>
        <ListItem> It's too clunky to leave the table of contents open while scrolling through the article, so it can be hard to remember the article layout, especially given how long the article is </ListItem>
        <ListItem> Users may have difficulty keeping track of their progress in the article, since there's no indicator for this </ListItem>
      </OrderedList>

      <Heading style={styles.headingMd} size='md'> Accessibility </Heading>

      <Text style={styles.text}>
        The main issues identified by WebAIM WAVE were missing alternative text and low-contrast colors. I agree that the page could use more alternative text, since a lot of the images had non-informative or altogether missing alternative text. I could also see some problems with the low-contrast colors, since this made it hard to notice important parts of the interface, such as the buttons for Edit and for the Table of Contents.
      </Text>


      <Heading style={styles.headingLg} size='lg'> Part 2: Visual Redesign </Heading>

      <Heading style={styles.headingMd} size='md'> Low-Fidelity Wireframing </Heading>

      <Text> Mobile: </Text>
      <Image
        src='/cs1300-portfolio/lo-fi-1.png'
        fit='scale-down'
        style={{...styles.image, maxWidth: 'min(800px, 100%)'}}
      />

      <Text style={styles.text}>
        We have rearranged the page content so that the advertising banner does not take up most of the screen. Advertising has been moved until after the article introduction so that the user can receive content before being subjected to advertisements (point 1). Other changes include making the navigation and close buttons more prominent to increase learnability for the interface (points 5 and 6). We introduce collapsible components so that users don't have to scroll excessively to find what they want (point 4). Additionally, the search bar no longer creates a popup (point 3). Points 7 and 8 are elaborated upon the in desktop redesign.
      </Text>

      <Text> Tablet: </Text>
      <Image
        src='/cs1300-portfolio/lo-fi-2.png'
        fit='scale-down'
        style={{...styles.image, maxWidth: 'min(800px, 100%)'}}
      />
      <Text style={styles.text}>
        The changes are mostly the same as those made for the mobile layout. The few differences include the persistent search bar, compared to the search bar on mobile, which needed a click to open. The additional horizontal space allows for some more flexibility in terms of layout.
      </Text>

      <Text> Desktop: </Text>
      <Image
        src='/cs1300-portfolio/lo-fi-3.png'
        fit='scale-down'
        style={{...styles.image, maxWidth: 'min(800px, 100%)'}}
      />
      <Text style={styles.text}>
        With the large horizontal space available on desktop, we can create elegant solutions to points 7 and 8. A fixed left sidebar contains the Table of Contents outline for the document, which the user can refer to at any time, in addition to allowing the user to navigate the page using skip links. The current section of the article that they are browsing will also be highlighted within the outline, so that the user can track their progress within the document. The fixed right sidebar returns some space for the advertisements that we removed from the original layout. This layout also brings back the top bar navigation options that were available in the original layout.
      </Text>


      <Heading style={styles.headingMd} size='md'> Visual Design Style Guide </Heading>

      <Image
        src='/cs1300-portfolio/style-guide.png'
        fit='scale-down'
        style={{...styles.image, maxWidth: 'min(800px, 100%)'}}
      />

      <Heading style={styles.headingMd} size='md'> High-Fidelity Prototyping </Heading>

      <Text> Mobile: </Text>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={'24px'}>
        <Image
          src='/cs1300-portfolio/13 Pro - 1.png'
          fit='scale-down'
          style={{...styles.image, maxWidth: '250px'}}
        />
        <Image
          src='/cs1300-portfolio/13 Pro - 2.png'
          fit='scale-down'
          style={{...styles.image, maxWidth: '250px'}}
        />
        <Image
          src='/cs1300-portfolio/13 Pro - 3.png'
          fit='scale-down'
          style={{...styles.image, maxWidth: '250px'}}
        />
      </SimpleGrid>

      <Text> Tablet: </Text>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={'24px'}>
        <Image
          src='/cs1300-portfolio/iPad Pro 11_ - 1.png'
          fit='scale-down'
          style={{...styles.image, maxWidth: 'min(400px, 100%)'}}
        />
        <Image
          src='/cs1300-portfolio/iPad Pro 11_ - 2.png'
          fit='scale-down'
          style={{...styles.image, maxWidth: 'min(400px, 100%)'}}
        />
      </SimpleGrid>

      <Text> Desktop: </Text>
      <Image
        src='/cs1300-portfolio/Desktop - 1.png'
        fit='scale-down'
        style={{...styles.image, maxWidth: 'min(800px, 100%)'}}
      />


      <Heading style={styles.headingLg} size='lg'> Part 3: Responsive Redesign </Heading>

      <Text style={styles.text}>
        The redesigned website can be found at <Link style={styles.link} isExternal href='https://intrepidpanda123.github.io/responsive-redesign/'>https://intrepidpanda123.github.io/responsive-redesign/</Link>
      </Text>

      <Text style={styles.text}>
        Some screenshots:
      </Text>

      <SimpleGrid columns={[1, 1, 2]} spacing={'24px'}>
        <Image
          src='/cs1300-portfolio/mobile-screenshot-1.png'
          fit='scale-down'
          style={{...styles.image, maxWidth: '300px'}}
        />
        <Image
          src='/cs1300-portfolio/mobile-screenshot-2.png'
          fit='scale-down'
          style={{...styles.image, maxWidth: '300px'}}
        />
      </SimpleGrid>

      <Image
        src='/cs1300-portfolio/redesign-screenshot.png'
        fit='scale-down'
        style={{...styles.image, maxWidth: 'min(100%, 800px)'}}
      />
    </div>
  )
}

export default ResponsiveRedesign;