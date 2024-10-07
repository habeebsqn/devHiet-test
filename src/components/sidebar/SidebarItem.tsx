import { ListItem, ListIcon } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export type ItemProps = {
  item: {
    label: string;
    link: string;
    icon: React.FC<any>;
    end?: boolean;
  };
};

const SidebarItem = ({ item }: ItemProps) => {
  return (
    <NavLink to={item?.link} end={item?.end} style={{ width: "100%" }}>
      {({ isActive }) => {
        return (
          <ListItem
            color={isActive ? "white" : "#053559"}
            bgColor={isActive ? "#053559" : "white"}
            w="100%"
            rounded={"md"}
            px="5px"
            py="8px"
          >
            <ListIcon as={item?.icon} mb={"2px"} />
            {item?.label}
          </ListItem>
        );
      }}
    </NavLink>
  );
};

export default SidebarItem;
