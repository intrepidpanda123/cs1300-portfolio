import { Grid, GridItem, Text, Image } from "@chakra-ui/react";

const styles = {
  parent: {
    maxWidth: '1200px',
  },
  image: {
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'teal',
    marginTop: '24px',
    marginBottom: '24px',
  },
}

const Storyboard = () => {
  return (
    <Grid style={styles.parent} templateColumns={'repeat(3, 1fr)'} gap={4}>
      <GridItem>
        <Image
          fit='scale-down'
          src='/cs1300-portfolio/frame-0001.jpg'
          style={styles.image}
        />
        <Text>
          Nellie and her friend decide to get boba on a Saturday morning. They walk into the tea shop and get in line for the ordering kiosk.
        </Text>
      </GridItem>
      <GridItem>
        <Image
          fit='scale-down'
          src='/cs1300-portfolio/frame-0002.jpg'
          style={styles.image}
        />
        <Text>
          After reaching the front of the line, Nellie tries to figure out what she should order. There's so many options! Two drinks in particular catch Nellie's eye. She asks her friend if she has any recommendations, but her friend doesn't know either. Nellie wishes there was more information about the drinks being conveyed on the kiosk to help her choose.
        </Text>
      </GridItem>
      <GridItem>
        <Image
          fit='scale-down'
          src='/cs1300-portfolio/frame-0003.jpg'
          style={styles.image}
        />
        <Text>
          Nellie notices that the line behind her is getting kind of long! She feels the need to hurry up, despite not having finished looking through the menu.
        </Text>
      </GridItem>
      <GridItem>
        <Image
          fit='scale-down'
          src='/cs1300-portfolio/frame-0004.jpg'
          style={styles.image}
        />
          Nellie decides to just pick one of the drinks that she was looking at earlier. She randomly picks some customization options and goes to check out.
      </GridItem>
      <GridItem>
        <Image
          fit='scale-down'
          src='/cs1300-portfolio/frame-0005.jpg'
          style={styles.image}
        />
        Nellie finishes paying and goes to meet her friend, who has been waiting for her. The kiosk tells her that her order will be ready to pickup at the counter.
      </GridItem>
      <GridItem>
        <Image
          fit='scale-down'
          src='/cs1300-portfolio/frame-0006.jpg'
          style={styles.image}
        />
        Nellie hears her drink being completed and goes to the counter to pick up her order.
      </GridItem>
      <GridItem>
        <Image
          fit='scale-down'
          src='/cs1300-portfolio/frame-0007.jpg'
          style={styles.image}
        />
        Afterwards, Nellie and her friend sit down to drink tea and chat. Nellie thinks her drink isn't too bad! However, she still wonders if she would've liked the other drink better. She wishes she had more time at the kiosk so that she could make a better decision.
      </GridItem>
    </Grid>
  );
};

export default Storyboard;