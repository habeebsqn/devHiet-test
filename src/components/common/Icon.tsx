import { ListIcon } from "@chakra-ui/react";

export type IconProps = {
  icon: any;
  color?: string;
  size?: number;
};

const Icon = ({ icon, color, size }: IconProps) => {
  return <ListIcon as={icon} color={color} boxSize={size} />;
};

export default Icon;
