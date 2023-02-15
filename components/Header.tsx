import { Button, Flex, Box, Stack, Text } from "@chakra-ui/react";
import DrawerMenu from "./DrwerMenu";

function Header() {
  return (
    <Box>
      <Flex
        h={{ base: "28", md: "20" }}
        align={{ base: "", md: "center" }}
        justifyContent="space-between"
        px={{ base: "2", md: "20" }}
        fontSize={{ base: "sm", md: "lg" }}
        bg={{ base: "none", md: "brand.50", lg: "none" }}
      >
        <Text fontWeight={"bold"}>Logo</Text>

        <Stack
          direction={{ base: "column", md: "row" }}
          // display={{ base: "flow-root",  }}
          alignItems="center"
          justifyContent={["center", "flex-end"]}
          spacing="6"
          bg={{ base: "brand.50", md: "none" }}
          h={{ base: "110vh" }}
          w={{ base: "full" }}
          visibility={{ base: "hidden", md: "inherit" }}
          zIndex="10"
          color={{ base: "white", md: "white", lg: "brand.50" }}
        >
          <Text>Home</Text>
          <Text>How it works</Text>
          <Text>Features</Text>
          <Text>Pricing</Text>
          <Button size={{ base: "sm", md: "md" }} variant={"primary"}>
            Create Account
          </Button>
        </Stack>
        <Box display={{ base: "center", md: "none" }} pt={"2px"}>
          <DrawerMenu />
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
