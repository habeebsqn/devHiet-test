import { GoHome } from "react-icons/go";
import { MdOutlineCampaign } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { GoStack } from "react-icons/go";
import { VscSettings } from "react-icons/vsc";

export const sidebarData = [
  {
    label: "Dashboard",
    link: "/",
    icon: GoHome,
    end: true,
  },
  {
    label: "Campaigns",
    link: "/campaigns",
    icon: MdOutlineCampaign,
  },
  {
    label: "Messages",
    link: "/messages",
    icon: LuMessagesSquare,
  },
  {
    label: "Earning History",
    link: "/earning",
    icon: GoStack,
  },
  {
    label: "Settings",
    link: "/settings",
    icon: VscSettings,
  },
];
