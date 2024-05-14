import { TabData } from "@/types";
import {
  FaCogs,
  FaHome,
  FaUserCog,
  FaUsersCog,
  FaUsers,
  FaBusinessTime,
  FaIdCardAlt,
} from "react-icons/fa";
import { GiCoffeeCup, GiThermometerScale } from "react-icons/gi";
import { IoCalendar } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { CgWorkAlt } from "react-icons/cg";
import { FaClipboardList } from "react-icons/fa";
import { TbLockExclamation, TbLockCheck, TbLockCancel } from "react-icons/tb";
import { TiCancelOutline } from "react-icons/ti";
import { IoCloseCircle } from "react-icons/io5";
import { RiDrinks2Fill } from "react-icons/ri";
import { FaBowlFood } from "react-icons/fa6";
import { MdAccessAlarms } from "react-icons/md";
import { BsMenuButtonWideFill } from "react-icons/bs";

export const adminTabs: TabData[] = [
  // { id: 2, label: "Dashboard", icon: MdSpaceDashboard, link: "/admin" },
  {
    id: 3,
    label: "Incredients",
    icon: GiThermometerScale,
    link: "/admin/incredients",
  },
  { id: 7, label: "Food", icon: FaBowlFood, link: "/admin/food" },
  { id: 8, label: "Timing", icon: MdAccessAlarms, link: "/admin/timing" },
  { id: 9, label: "Menu", icon: BsMenuButtonWideFill, link: "/admin/menu" },
  { id: 11, label: "Drinks", icon: RiDrinks2Fill, link: "/admin/drink" },
  { id: 10, label: "Users", icon: FaUsers, link: "/admin/user" },
];
