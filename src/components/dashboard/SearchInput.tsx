import {
  InputGroup,
  Input,
  InputGroupProps,
  Icon,
  InputLeftElement,
  IconButton,
  InputRightAddon,
} from "@chakra-ui/react";
import { memo } from "react";
import React from "react";

export type Props = InputGroupProps & {
  placeholder?: string;
  leftIcon?: React.FC<any>;
  rightIcon?: any;
  rightIconColor?: string;
  leftIconColor?: string;
  search: string;
  handleChange: (e: any) => void;
  onSearch: () => void;
};

const SearchInput = ({
  leftIcon,
  leftIconColor = "black",
  rightIconColor = "black",
  rightIcon,
  search,
  placeholder = "Search",
  handleChange,
  onSearch,
  ...Props
}: Props) => {
  return (
    <InputGroup {...Props}>
      <InputLeftElement pointerEvents="none" hideFrom={"lg"}>
        <Icon color={leftIconColor} as={leftIcon} />
      </InputLeftElement>

      <Input
        type="search"
        placeholder={placeholder}
        colorScheme="blue"
        variant={"filled"}
        onChange={handleChange}
        value={search}
      />

      <InputRightAddon w={"-webkit-fit-content"} p={0}>
        <IconButton
          bgColor={"#053559"}
          color={rightIconColor}
          aria-label="show"
          size="md"
          //   boxSize={"-moz-fit-content"}

          icon={rightIcon}
          onClick={onSearch}
        />
      </InputRightAddon>
    </InputGroup>
  );
};

export default memo(SearchInput);
