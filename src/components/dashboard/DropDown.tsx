import { Select, SelectProps } from "@chakra-ui/react";

export type Props = SelectProps & {
  options: { label: string; key: number | string; value: string }[];
};

const DropDown = ({ options, ...props }: Props) => {
  return (
    <Select
      placeholder="Category"
      variant="filled"
      bgColor={"#E7F5FF"}
      borderRadius={"md"}
      {...props}
      //   width={"fit-content"}
      //   value={selected}
      //   onChange={(e) => {
      //     if (e.target.value !== "")
      //       setSelectedCurrency(e.target.value);
      //   }}
      //   disabled={
      //     currency?.error ||
      //     currency?.isLoading ||
      //     currency?.isRefetching
      //       ? true
      //       : false
      //   }
    >
      {options?.map((opt: any) => (
        <option key={opt?.key} value={opt?.value}>
          {opt?.label}
        </option>
      ))}
    </Select>
  );
};

export default DropDown;
