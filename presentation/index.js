// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  starlordConfused: require("../assets/starlord_confused.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Monaco",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  // <Appear><Heading size={1} textColor="secondary">Heading 1</Heading></Appear>
  // <Heading size={2} textColor="secondary">Heading 2</Heading>
  // <Heading size={3} textColor="secondary">Heading 3</Heading>
  // <Heading size={4} textColor="secondary">Heading 4</Heading>
  // <Heading size={5} textColor="secondary">Heading 5</Heading>
  // <Text size={6} textColor="secondary">Standard text</Text>
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Reactive Programming
          </Heading>
          <Appear>
            <Heading size={6} caps lineHeight={1} textColor="secondary">
              - OR -
            </Heading>
          </Appear>
          <Appear>
            <Image src={images.starlordConfused.replace("/", "")} height="300px" width="300px" display="block" />
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>What?</Heading>
          <List>
            <Appear><ListItem>Item 1</ListItem></Appear>
            <Appear><ListItem>Item 1</ListItem></Appear>
            <Appear><ListItem>Item 1</ListItem></Appear>
            <Appear><ListItem>Item 1</ListItem></Appear>
            <Appear><ListItem>Item 1</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={4} textColor="primary" caps>Why?</Heading>
          <List>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>How?</Heading>
          <List>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={4} textColor="primary" caps>When?</Heading>
          <List>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
            <Appear><ListItem textColor="primary">Item 1</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
