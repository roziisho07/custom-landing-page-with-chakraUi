import {
  Text,
  SimpleGrid,
  GridItem,
  Heading,
  Button,
  Flex,
  Box,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import Plant from "../components/images/Plant.jpg";
function Hero() {
  return (
    <Flex
      justifyContent={"center"}
      align="center"
      h={{ base: "100vh", md: "100vh" }}
      px={20}
    >
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        alignItems="center"
        justifyContent={"center"}
        textAlign={{ base: "center", md: "left" }}
        gap="12"
      >
        <GridItem maxW={"2xl"}>
          <Heading fontSize={["xl", "xl", "4xl"]}>
            Custon Landing page<br></br> with Chakra UI
          </Heading>
          <Text textAlign={"left"} py="4" fontSize={["sm", "sm", "xl"]}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            voluptatem consectetur modi atque
          </Text>
          <Button size={{ base: "sm", md: "lg" }} variant={"primary"}>
            Create account
          </Button>
          <Text pt={"2"} fontSize={"14"}>
            no credit card required
          </Text>
        </GridItem>
        <GridItem
          justifySelf="flex-end"
          shadow={"2xl"}
          borderRadius="2xl"
          overflow={"hidden"}
          bg="green.200"
        >
          <Image height={1080} width={1080} src={Plant} alt="Plant in a vase" />
        </GridItem>
      </Flex>
    </Flex>
  );
}

export default Hero;
