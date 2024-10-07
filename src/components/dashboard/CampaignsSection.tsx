import { Grid } from "@chakra-ui/react";
import { memo } from "react";
import CampaignCard from "./CampaignCard";

export type Props = {
  campaigns: {
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
  }[];
};
const CampaignsSection = memo(({ campaigns }: Props) => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
      gap={"2vw"}
    >
      {campaigns.map((campaign) => (
        <CampaignCard {...campaign} key={campaign?.id} />
      ))}
    </Grid>
  );
});

export default CampaignsSection;
