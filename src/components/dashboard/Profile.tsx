import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  IconButton,
  Avatar,
  VStack,
  Heading,
  Progress,
  HStack,
} from "@chakra-ui/react";
import { IoOpenOutline } from "react-icons/io5";
import ProfileImg from "../../assets/Profile.png";

const Profile = () => {
  return (
    <Card
      border={"1px"}
      borderColor={"#053559"}
      px={"1vw"}
      borderRadius={"15px"}
      width={"40%"}
    >
      <CardHeader
        color={"#053559"}
        borderBottom={"1px"}
        borderColor={"#BFBFBF"}
        w="100%"
        px={0}
        py={"8px"}
        flexDirection={"row"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontSize="md" textTransform={"capitalize"} fontWeight={"medium"}>
          Profile Information
        </Text>
        <IconButton
          variant={"unstyled"}
          color={"#0D98FE"}
          aria-label="show"
          size="sm"
          boxSize={"-moz-fit-content"}
          minWidth={"fit-content"}
          icon={<IoOpenOutline />}
          onClick={() => {
            //   onOpen();
          }}
        />
      </CardHeader>
      <CardBody
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        w={"100%"}
        px={0}
        py={"5px"}
      >
        <Avatar
          name="Profile Picture"
          src={ProfileImg}
          borderRadius={"10px"}
          objectFit={"cover"}
          size={"lg"}
        />

        <VStack w={"100%"} alignItems={"flex-start"}>
          <Heading fontSize={"15px"} color={"#053559"}>
            Olivia Jacobs Jacobs
          </Heading>
          <HStack w={"100%"} alignItems={"center"}>
            <Progress
              colorScheme="blue"
              size="xs"
              value={20}
              w={"100%"}
              borderRadius={"4px"}
            />
            <Text fontSize={"sm"}>20%</Text>
          </HStack>
        </VStack>
      </CardBody>
      <CardFooter w="100%" px={0}>
        <Text fontSize={"sm"}>
          Complete your profile with details showcasing your skills and
          personality. Stand out and attract more opportunities.
        </Text>
      </CardFooter>
    </Card>
  );
};

export default Profile;
