import { Button, HStack, Heading, IconButton } from "@chakra-ui/react";
import { memo } from "react";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

export type Props = {
  onOpenCampaignModal: () => void;
};

const HeadSection = ({ onOpenCampaignModal }: Props) => {
  return (
    <HStack
      as={"section"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Heading size={"md"} fontWeight={"normal"} color={"#053559"}>
        Dashboard
      </Heading>

      <HStack as={"section"} alignItems={"center"} gap={"1vw"}>
        <Button
          leftIcon={<IoMdAdd />}
          bgColor={"#053559"}
          color={"white"}
          variant="solid"
          size={"sm"}
          onClick={onOpenCampaignModal}
        >
          Create a New Campaign
        </Button>
        <IconButton
          color={"#053559"}
          aria-label="message"
          boxSize={"-moz-fit-content"}
          minWidth={"fit-content"}
          size="lg"
          icon={<BsFillChatTextFill />}
          onClick={() => {
            //   onOpen();
          }}
        />
        <IconButton
          variant={"unstyled"}
          color={"#053559"}
          aria-label="notification"
          boxSize={"-moz-fit-content"}
          minWidth={"fit-content"}
          size="lg"
          icon={<IoMdNotifications />}
          onClick={() => {
            //   onOpen();
          }}
        />
      </HStack>
    </HStack>
  );
};

export default memo(HeadSection);
