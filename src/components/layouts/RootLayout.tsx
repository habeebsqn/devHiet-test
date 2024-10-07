import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "../navigation/SideBar";
import { Outlet } from "react-router-dom";
import NavBar from "../navigation/NavBar";
const RootLayout = () => {
  return (
    <Grid
      h="100vh"
      templateRows={{ base: "repeat(10, 1fr)", lg: "repeat(2, 1fr)" }}
      templateColumns="repeat(7, 1fr)"
      gap={2}
      bgColor={"whitesmoke"}
    >
      {/* view on large screen (side bar)*/}
      <GridItem
        rowSpan={2}
        colSpan={1}
        bg="white"
        area={"nav"}
        boxShadow="2xl"
        hideBelow={"lg"}
      >
        <SideBar />
      </GridItem>
      {/* view on large screen (side bar) */}

      {/* view on small screen (nav bar) */}
      <GridItem colSpan={7} rowSpan={1} hideFrom={"lg"}>
        <NavBar />
      </GridItem>
      {/* view on small screen (nav bar) */}

      <GridItem
        colSpan={{ base: 7, lg: 6 }}
        rowSpan={{ base: 9, lg: 2 }}
        bg="whitesmoke"
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
