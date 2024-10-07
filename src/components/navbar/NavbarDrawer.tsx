import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  VStack,
  DrawerContentProps,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { sidebarData } from "../../constants/sidebarData";
import SidebarItem from "../sidebar/SidebarItem";
import { IoIosNotifications } from "react-icons/io";

export type DrawerProps = DrawerContentProps & {
  isOpen: boolean;
  onClose: () => void;
};

const NavbarDrawer = ({ onClose, isOpen }: DrawerProps) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
      <DrawerOverlay />
      <DrawerContent bgColor={"white"}>
        <DrawerCloseButton mt={1.5} />
        <DrawerHeader
          justifyContent={"space-between"}
          flexDirection={"row"}
          display={"flex"}
          mx={"3vw"}
          alignItems={"center"}
        >
          <Heading color="#053559" size={"sm"}>
            Mirco Influx
          </Heading>

          <IconButton
            variant={"unstyled"}
            color={"#053559"}
            aria-label="show"
            size="sm"
            icon={<IoIosNotifications />}
            onClick={() => {
              //   onOpen();
            }}
          />
        </DrawerHeader>
        <DrawerBody>
          <List>
            <VStack
              spacing="3vh"
              direction={"column"}
              display={"flex"}
              align={"flex-start"}
              w="100%"
            >
              {sidebarData.map((nav, i) => (
                <SidebarItem key={i} item={nav} />
              ))}
            </VStack>
          </List>

          {/* contact info */}
          {/* <VStack
        borderColor={"rgba(247, 251, 249, 0.25)"}
        borderWidth={"3px"}
        rounded={"lg"}
        bgColor={"rgba(247, 251, 249, 0.2)"}
        p="16px"
        display={"flex"}
        top={{ base: "10vh", lg: "25vh" }}
        position={"relative"}
        color={"white"}
      >
        <Text textAlign={"center"}>
          Need help? Get in touch with us via
        </Text>
        <Text
          textAlign={"center"}
          textTransform={"capitalize"}
          as={"b"}
          size={"xs"}
        >
          07025640071
          <br />
          or
          <br />
          mapp@meristemng.com
        </Text>
        <Link href="https://wa.me/2348084259372" isExternal>
          <Image
            width={"50vw"}
            height={"10vh"}
            objectFit="contain"
            src={chatOnWhatsapp}
            alt="WhatsApp"
          />
        </Link>
      </VStack> */}
          {/* contact info */}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavbarDrawer;
