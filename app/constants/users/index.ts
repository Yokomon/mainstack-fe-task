import { IoSettingsOutline } from "@react-icons/all-files/io5/IoSettingsOutline";
import { MdHistory } from "@react-icons/all-files/md/MdHistory";
import { VscReferences } from "@react-icons/all-files/vsc/VscReferences";
import { TbApps } from "@react-icons/all-files/tb/TbApps";
import { GoBug } from "@react-icons/all-files/go/GoBug";
import { MdOutlineSwitchAccount } from "@react-icons/all-files/md/MdOutlineSwitchAccount";
import { LuLogOut } from "@react-icons/all-files/lu/LuLogOut";

export const userMenu = [
  {
    icon: IoSettingsOutline,
    actionTitle: "Settings",
  },
  {
    icon: MdHistory,
    actionTitle: "Purchase history",
  },
  {
    icon: VscReferences,
    actionTitle: "Refer and earn",
  },
  {
    icon: TbApps,
    actionTitle: "Integrations",
  },
  {
    icon: GoBug,
    actionTitle: "Report Bug",
  },
  {
    icon: MdOutlineSwitchAccount,
    actionTitle: "Switch account",
  },
  {
    icon: LuLogOut,
    actionTitle: "Sign out",
  },
];
