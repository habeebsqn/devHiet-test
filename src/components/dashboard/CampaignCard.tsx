import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  GridItem,
  Heading,
  HStack,
  VStack,
  Text,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { channelsIcon } from "../../constants/channels";

import { IoMdBookmark } from "react-icons/io";

export type Props = {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  channels: string[];
  startDate: string;
  budget: {
    min: string;
    max: string;
  };
  status: string;
};

const CampaignCard = ({
  title,
  startDate,
  brand,
  description,
  channels,
  budget,
  category,
}: Props) => {
  const period = getTimeAgo(startDate);

  const validCh = channels.filter((ch) => channelsIcon[ch]);
  const displaych = validCh.slice(0, 3);
  const morech = validCh.length - 3;

  return (
    <GridItem as={"div"}>
      <Card
        bgColor={{ base: "whitesmoke", lg: "white" }}
        borderRadius={{ base: 0, lg: "lg" }}
        boxShadow={{ base: "none", lg: "md" }}
        borderBottom={{ base: "1px solid gray", lg: "none" }}
      >
        <CardHeader display={"flex"} gap={2} py={4}>
          <Avatar
            name={title}
            w={{ base: "10vw", lg: "3vw" }}
            h={{ base: "7vh", lg: "6vh" }}
            borderRadius={"md"}
          />

          <VStack w={"100%"} gap={"1px"}>
            <HStack justifyContent={"space-between"} w={"100%"}>
              <Text
                fontSize="sm"
                textTransform={"capitalize"}
                fontWeight={"medium"}
                whiteSpace={"nowrap"}
                isTruncated
                maxW={{ base: "30vw", lg: "9vw" }}
                color={"#053559"}
              >
                {title}
              </Text>
              <HStack alignItems={"center"}>
                <Text fontSize="10px" whiteSpace={"nowrap"}>
                  Posted {period}
                </Text>
                <IconButton
                  variant={"unstyled"}
                  color={"red"}
                  aria-label="boork mark"
                  size="sm"
                  boxSize={"-moz-fit-content"}
                  minWidth={"fit-content"}
                  icon={<IoMdBookmark />}
                  onClick={() => {
                    //   onOpen();
                  }}
                />
              </HStack>
            </HStack>
            <Text
              fontSize="xs"
              whiteSpace={"nowrap"}
              alignSelf={"flex-start"}
              textTransform={"capitalize"}
            >
              {brand} • {category}
            </Text>
          </VStack>
        </CardHeader>
        <CardBody
          display={"flex"}
          flexDirection={"column"}
          py={"1vh"}
          justifyContent={"space-between"}
          minHeight={{ lg: "21vh" }}
        >
          <Text color={"#595959"} fontSize={"sm"} noOfLines={3}>
            {description}
          </Text>
          <VStack display={"flex"} gap={2} alignItems={"flex-start"} mt={"1vh"}>
            <Heading
              as={"h5"}
              size={"sm"}
              fontWeight={"medium"}
              color={"#053559"}
            >
              Channels
            </Heading>
            <HStack>
              {displaych.map((ch) => (
                <Icon
                  as={channelsIcon[ch].icon}
                  boxSize={7}
                  color={"#053559"}
                />
              ))}
              {morech > 0 && (
                <Text color={"#053559"} fontSize={"xs"} fontWeight={"medium"}>
                  +{morech} more
                </Text>
              )}
            </HStack>
          </VStack>
        </CardBody>
        <CardFooter
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <VStack alignItems={"flex-start"}>
            <Heading
              as={"h4"}
              size={"sm"}
              fontWeight={"medium"}
              color={"#053559"}
            >
              Budget
            </Heading>
            <Heading
              size={"md"}
              color={"#053559"}
            >{`$${budget?.min} - $${budget?.max}`}</Heading>
          </VStack>

          <Button
            bgColor={"#053559"}
            color={"white"}
            _hover={{ bgColor: "rgba(5, 53, 89, 0.5)" }}
            size={"lg"}
          >
            Apply Now
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default CampaignCard;
