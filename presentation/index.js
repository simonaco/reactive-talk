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
  CodePane,
  Link
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
  twitter: require("../assets/twitter.png"),
  octocat: require("../assets/Octocat.png"),
  sunset: require("../assets/sunset_image.jpg"),
  reactiveDog: require("../assets/reactive_dog.jpg"),
  starlordConfused: require("../assets/starlord_confused.jpg"),
  nightmare: require("../assets/nightmare.jpg")
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
            <Image src={images.starlordConfused.replace("/", "")} height="500px" width="500px" display="block" />
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>What it does by definition...</Heading>
          \n
          <Appear>
            <Text size={6} textColor="primary">
                Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">Feels like</Heading>
          <Image src={images.anchorman.replace("/", "")} height="500px" width="800px" />
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={4} textColor="primary" caps>Huh?</Heading>
          <List>
            <Appear>
              <ListItem textColor="primary" textSize="1.2em">
                Reactive programming is programming with asynchronous data streams.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1.2em">
                Streams are object pipelines (data/events/objects), which you can observe and react to.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1.2em">
                Streams are observables.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1.2em">
                Observers are methods that implement actions based on the observed stream.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1.2em">
                Streams(Observables) can be created and composed using operators
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Why?</Heading>
          <List>
            <Appear>
              <ListItem textColor="primary" textSize="1.2em">
                Managing user events flow is hard
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1.2em">
                Managing broadcast events is harder
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1.2em">
                Managing both is a NIGHTMARE
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1.2em">
                The bad news is you have to handle both
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <Image src={images.nightmare.replace("/", "")} width="400" height="300" />
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={4} textColor="primary" caps>How?</Heading>
          <List>
            <Appear>
              <ListItem textColor="primary" textSize="1em">
                The fundament of the implementation in reactive programming is the Observer Pattern.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1em">
                The most popular library is Rx. It has multiple language implementations (JS, Python, Java, Scala, C# etc.)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1em">
                RP can be useful both in UI and on the server side as a logical progression in event driven systems
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize="1em">
                These libraries provide great tools for composing and aggregating data streams through operators.
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>When?</Heading>
          <List>
            <Appear>
              <ListItem textColor="primary">
                You have an UI with complex events on components
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                You have a server side app that needs to have side effects based on async service calls.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                As a rule of thumb whenever the system has asynchronous API calls and side effects based on these calls then there can be gains using the reactive approach
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={4} textColor="primary" caps>When (Examples)?</Heading>
          <List>
            <Appear>
              <ListItem textColor="primary">
                A grid-like component with functionality similar to MS Excel
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                An interactive shared dashboard
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                A web text editor
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                A highly concurrent message queue
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Some Code Using Rx</Heading>
          <Heading size={6} textColor="primary" caps>...and Hello World</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/deck.example")}
            textSize="0.7em"
            margin="20px auto"
          />
        </Slide>


        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={4} textColor="primary" caps>Classical event handling</Heading>
          \n
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/classical.example")}
            textSize="0.7em"
            margin="20px auto"
          />
          \n
          <Heading size={4} textColor="primary" caps>Reactive event handling</Heading>
          \n
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/reactive.example")}
            textSize="0.7em"
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["fade"]} bgImage={images.sunset.replace("/", "")} bgDarken="0.50" textColor="primary">
          <BlockQuote>
          <Quote>
            <Image src={images.reactiveDog.replace("/", "")} width="500" height="500" />
          </Quote>
          <Cite>Every Reactive Programmer Ever</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              <Image src={images.twitter.replace("/", "")} width="120" height="100" />
              <Link textColor="tertiary"> @hackawaye</Link>
            </Quote>
            <Quote>
              <Image src={images.octocat.replace("/", "")} width="100" height="100" />
              <Link textColor="tertiary" href="http://github.com/adaschevici/reactive-talk" textSize="0.35em">http://github.com/adaschevici/reactive-talk</Link>
            </Quote>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
