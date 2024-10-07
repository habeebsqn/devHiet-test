import {
  Heading,
  HStack,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import NavbarDrawer from "../navbar/NavbarDrawer";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack justifyContent={"space-between"} alignItems={"center"}>
      <Image src={Logo} alt="Logo" objectFit={"cover"} boxSize={"14"} />

      <Heading color="#053559" size={"sm"}>
        Mirco Influx
      </Heading>

      <IconButton
        variant={"unstyled"}
        color={"black"}
        aria-label="show"
        size="lg"
        icon={<RxHamburgerMenu />}
        onClick={() => {
          onOpen();
        }}
      />

      <NavbarDrawer isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
};

export default NavBar;
