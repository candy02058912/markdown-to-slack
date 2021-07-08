import {
  ChakraProvider,
  Container,
  Heading,
  HStack,
  Textarea,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";
import slackify from "slackify-markdown";
import "./styles.css";

export default function App() {
  const [output, setOutput] = useState("");
  const handleMarkdownInput = (e: any) => {
    setOutput(slackify(e.target.value));
  };
  return (
    <ChakraProvider>
      <Container maxW="container.xl">
        <VStack align="stretch">
          <Heading textAlign="center">Markdown to Slack</Heading>
          <HStack height="80vh">
            <Textarea
              height="100%"
              placeholder="Markdown here"
              onInput={handleMarkdownInput}
            />
            <Textarea height="100%" placeholder="Output here" value={output} />
          </HStack>
        </VStack>
      </Container>
    </ChakraProvider>
  );
}
