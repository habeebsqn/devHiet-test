import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import BgImage from "../../assets/bgCard.png";
import { IoOpenOutline } from "react-icons/io5";
import Profile from "./Profile";

const OverviewSection = () => {
  return (
    <HStack
      as={"section"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {/* Income overview */}
      <Card
        align="center"
        bgImage={BgImage}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        px={"1vw"}
        borderRadius={"15px"}
        width={"70%"}
      >
        <CardHeader
          color={"white"}
          borderBottom={"1px"}
          borderColor={"white"}
          w="100%"
          px={0}
          py={"8px"}
          flexDirection={"row"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text
            fontSize="md"
            textTransform={"capitalize"}
            fontWeight={"medium"}
          >
            Financial Overview
          </Text>

          <HStack>
            <Text fontSize="sm">View all campaigns</Text>
            <IconButton
              variant={"unstyled"}
              color={"white"}
              aria-label="show"
              size="sm"
              boxSize={"-moz-fit-content"}
              minWidth={"fit-content"}
              icon={<IoOpenOutline />}
              onClick={() => {
                //   onOpen();
              }}
            />
          </HStack>
        </CardHeader>

        <CardBody
          flexDirection={"row"}
          display={"flex"}
          justifyContent={"flex-start"}
          w="100%"
          px={0}
          gap={"2vw"}
        >
          <VStack color={"white"} gap={"1px"} alignItems={"flex-start"}>
            <Text fontSize="sm">Total Income</Text>
            <Text fontSize="lg" fontWeight={"medium"}>
              $1,200,000
            </Text>
          </VStack>
          <VStack color={"white"} gap={"1px"} alignItems={"flex-start"}>
            <Text fontSize="sm">Funds In Escrow</Text>
            <Text fontSize="lg" fontWeight={"medium"}>
              $1,200,000
            </Text>
          </VStack>
          <VStack color={"white"} gap={"1px"} alignItems={"flex-start"}>
            <Text fontSize="sm">Ave. Income Monthly</Text>
            <Text fontSize="lg" fontWeight={"medium"}>
              $3,542
            </Text>
          </VStack>
        </CardBody>

        <CardFooter
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          w="100%"
          px={0}
          gap={"0.5vw"}
          color={"white"}
        >
          <Text fontSize="sm" fontWeight={"medium"}>
            January Summary:
          </Text>
          <Text fontSize="sm">Total Funds In Escrow</Text>•
          <Text fontSize="sm" fontWeight={"medium"}>
            $350
          </Text>
          <Text fontSize="sm">Total Income</Text>•
          <Text fontSize="sm" fontWeight={"medium"}>
            $850
          </Text>
        </CardFooter>
      </Card>
      {/* Income overview */}

      {/* Profile overview */}
      <Profile />

      {/* Profile overview */}
    </HStack>
  );
};

export default OverviewSection;
