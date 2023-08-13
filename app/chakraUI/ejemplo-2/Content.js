"use client";
import { Text, Container, Fade } from "@chakra-ui/react";

// Referencia:
// https://chakra-ui.com/docs/components/container/usage
// https://chakra-ui.com/docs/components/text
// https://chakra-ui.com/docs/components/transitions/usage (Fade)
const Content = () => {
  return (
    <Fade in={true} transition={{ enter: { duration: 0.5 } }}>
      <Container mt={"10"} px={"3"} py={"4"} bg="InfoText">
        <Text fontSize="3xl" mb={"2"} color="white">
          Ejemplo 2
        </Text>
        <Text fontSize="md" color="white">
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production
        </Text>
      </Container>
    </Fade>
  );
};

export default Content;
