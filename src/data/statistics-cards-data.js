import {
  BanknotesIcon,
  ArrowUpOnSquareStackIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color:"pink",
    icon: ArrowUpOnSquareStackIcon,
    title: "Total Documents",
    value: "541",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Today's Users",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
];

export default statisticsCardsData;
