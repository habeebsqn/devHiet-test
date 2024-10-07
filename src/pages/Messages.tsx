import { Flex } from "@chakra-ui/react";

const Messages = () => {
  return (
    <Flex
      direction={"column"}
      height={"100vh"}
      py={"4vh"}
      px={"3vw"}
      gap={"4vh"}
      overflowY={"auto"}
      bg="whitesmoke"
      justifyContent={"center"}
      alignItems={"center"}
    >
      Messages page
    </Flex>
  );
};

export default Messages;
