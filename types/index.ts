import { IconType } from "react-icons";

export interface TabData {
  id: number;
  label: string;
  icon: IconType;
  child?: boolean;
  childLink?: TabData[];
  link: string;
}
