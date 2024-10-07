import { useCallback, useEffect, useState } from "react";
import {
  Flex,
  Hide,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import HeadSection from "../components/dashboard/HeadSection";
import OverviewSection from "../components/dashboard/OverviewSection";
import SearchInput from "../components/dashboard/SearchInput";
import { category } from "../constants/category";

import { IoIosSearch } from "react-icons/io";
import { FiGrid } from "react-icons/fi";
import { IoIosList } from "react-icons/io";

import DropDown from "../components/dashboard/DropDown";
import CampaignsSection from "../components/dashboard/CampaignsSection";
import AddCampaignModal from "../components/dashboard/AddCampaignModal";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const DashBoard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { campaigns } = useSelector((state: RootState) => state.data);
  const [search, setSearch] = useState<string>("");
  const [filterCampaigns, setFilterCampaigns] = useState(campaigns);

  const handleSearchChange = useCallback(
    (e: any) => setSearch(e.target.value),
    []
  );

  const handleFilterCampaigns = () => {
    const sorted = campaigns.filter((campaign) => {
      if (!search.trim() || search.trim() === "") {
        return true;
      }
      return campaign.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilterCampaigns(sorted);
  };

  useEffect(() => {
    if (!search.trim() || search.trim() === "") {
      return setFilterCampaigns(campaigns);
    }
  }, [search, campaigns]);
  return (
    <Flex
      direction={"column"}
      height={"100vh"}
      py={"4vh"}
      px={"3vw"}
      gap={"4vh"}
      overflowY={"auto"}
      bg="whitesmoke"
    >
      {/* section one */}
      <HeadSection onOpenCampaignModal={onOpen} />
      {/* section one */}

      {/* section two */}
      <Hide below="lg">
        <OverviewSection />
      </Hide>
      {/* section two */}

      {/* section three (filter section)  */}
      <Flex direction={"column"} gap={"3vh"}>
        <HStack
          as={"section"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text
            fontSize="sm"
            textTransform={"capitalize"}
            fontWeight={"medium"}
            color={"#053559"}
            hideBelow={"lg"}
          >
            Explore Campaigns
          </Text>

          <SearchInput
            placeholder="Search Description"
            w={{ base: "100%", lg: "40%" }}
            rightIcon={<IoIosSearch />}
            leftIcon={IoIosSearch}
            leftIconColor="#053559"
            rightIconColor="white"
            handleChange={handleSearchChange}
            search={search}
            onSearch={handleFilterCampaigns}
          />
        </HStack>
        <Hide below="lg">
          <HStack justifyContent={"space-between"}>
            <Text fontSize="xs" textTransform={"capitalize"} color={"black"}>
              Search results:
              <Text
                color={"#053559"}
                fontSize="xs"
                as={"span"}
                fontWeight={"medium"}
              >
                {" "}
                {filterCampaigns.length} Blog post{" "}
              </Text>{" "}
              campaigns
            </Text>

            <HStack gap={"1vw"}>
              <Text
                fontSize="xs"
                textTransform={"capitalize"}
                color={"black"}
                whiteSpace={"nowrap"}
              >
                Sort by:
              </Text>
              <DropDown
                options={category}
                size={"sm"}
                color={"#053559"}
                fontSize={"sm"}
                fontWeight={"medium"}
              />
              <IconButton
                _hover={{ bgColor: "gray.200" }}
                bgColor={"#E7F5FF"}
                colorScheme="blue"
                color={"#053559"}
                aria-label="show"
                size="sm"
                // boxSize={"-moz-fit-content"}
                // minWidth={"fit-content"}
                icon={<FiGrid />}
                onClick={() => {
                  //   onOpen();
                }}
              />
              <IconButton
                variant={"ghost"}
                _hover={{ bgColor: "gray.200" }}
                colorScheme="blue"
                color={"#053559"}
                aria-label="show"
                size="sm"
                // boxSize={"-moz-fit-content"}
                // minWidth={"fit-content"}
                icon={<IoIosList />}
                onClick={() => {
                  //   onOpen();
                }}
              />
            </HStack>
          </HStack>
        </Hide>
      </Flex>
      {/* section three (filter section)  */}

      {/* section four (campaign section)  */}
      <CampaignsSection campaigns={filterCampaigns} />
      {/* section three (campaign section)  */}

      {/* add campaign modal */}

      <AddCampaignModal isOpen={isOpen} onClose={onClose} />

      {/* add campaign modal */}
    </Flex>
  );
};

export default DashBoard;
