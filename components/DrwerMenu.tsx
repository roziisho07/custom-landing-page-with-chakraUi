import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";

function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant={"primary"} onClick={onOpen}>
        Menu
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={"brand.50"}>
          <DrawerCloseButton />
          <DrawerHeader color={"white"}>Create your account</DrawerHeader>

          <DrawerBody>
            <Stack
              direction={{ base: "column", md: "row" }}
              alignItems="center"
              spacing="6"
              py={"12"}
              color={"white"}
            >
              <Text>Home</Text>
              <Text>How it works</Text>
              <Text>Features</Text>
              <Text>Pricing</Text>
              <Button size={{ base: "sm", md: "md" }} variant={"primary"}>
                Create Account
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerMenu;
