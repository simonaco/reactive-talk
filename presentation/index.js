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
  Appear,
  Markdown
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  anchorman: require("../assets/anchorman.jpg"),
  reactiveDog: require("../assets/reactive_dog.jpg"),
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

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>What it does by definition...</Heading>
          <Cite>
            <Text size={6} textColor="primary">
              Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
            </Text>
          </Cite>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">Feels like</Heading>
          <Image src={images.anchorman.replace("/", "")} height="500px" width="800px" />
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Huh?</Heading>
          <List>
            <Appear>
              <ListItem textColor="primary" textSize="1.2em">
                Reactive programming is programming with asynchronous data streams.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1.2em">
                Streams are event pipelines or your typical events, which you can observe and trigger side effects.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1.2em">
                Streams are observables.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1.2em">
                Observables can be subscribed to by observers which implement the functionality for the observed stream data.
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={4} textColor="primary" caps>Why?</Heading>
          <List>
            <Appear>
              <ListItem textColor="primary" textSize="1em">
                The benefit is obvious in modern webapps and mobile apps that are highly interactive with a multitude of UI events related to data events
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1em">
                Apps are more real time, triggering saves and modifications to the backend in response to these events
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1em">
                Data changes need to be broadcasted seamlessly and at scale to all users
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1em">
                The complexity of the event flow raises a requirement for a layer of abstraction on top of event pipelines and Reactive Programming is an approach to this abstraction.
              </ListItem>
            </Appear>
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
          <Quote>
            <Image src={images.reactiveDog.replace("/", "")} width="500" height="500" />
          </Quote>
          <Cite>Every Reactive Programmer Ever</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
