import { Flex, List, VStack } from "@chakra-ui/react";
import { sidebarData } from "../../constants/sidebarData";
import SidebarItem from "../sidebar/SidebarItem";

const SideBar = () => {
  return (
    <Flex
      direction={"column"}
      height={"100%"}
      px="1vw"
      py={"5vh"}
      justifyContent={"space-between"}
    >
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

      <Flex
        direction={"column"}
        h="30vh"
        border={"2px"}
        borderColor={"blue"}
        borderStyle={"dotted"}
      ></Flex>
    </Flex>
  );
};

export default SideBar;
