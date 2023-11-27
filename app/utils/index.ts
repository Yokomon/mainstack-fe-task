import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { MdOutlineAnalytics } from "@react-icons/all-files/md/MdOutlineAnalytics";
import { SlHome } from "@react-icons/all-files/sl/SlHome";

export enum HEADER_TITLE {
  Home = "Home",
  Analytics = "Analytics",
  Revenue = "Revenue",
  CRM = "CRM",
}

export const getHeaderNavs = (navPath: keyof typeof HEADER_TITLE) => [
  {
    icon: SlHome,
    headerTitle: HEADER_TITLE["Home"],
    active: navPath === "Home",
  },
  {
    icon: MdOutlineAnalytics,
    headerTitle: HEADER_TITLE["Analytics"],
    active: navPath === "Analytics",
  },
  {
    headerImage: React.createElement(Image, {
      src: "/images/navbar_assets/payments.svg",
      width: 20,
      height: 20,
      alt: "payments-image",
      className: clsx({
        ["brightness-0"]: navPath !== "Revenue",
      }),
    }),
    headerTitle: HEADER_TITLE["Revenue"],
    active: navPath === "Revenue",
  },
  {
    headerImage: React.createElement(Image, {
      src: "/images/navbar_assets/group.svg",
      width: 20,
      height: 20,
      alt: "group-image",
      className: clsx({
        ["brightness-[100]"]: navPath === "CRM",
      }),
    }),
    headerTitle: HEADER_TITLE["CRM"],
    active: navPath === "CRM",
  },
];

export const getTransactionTypeOptions = () => [
  {
    value: "Store Transactions",
    label: "Store Transactions",
  },
  { value: "Get Tipped", label: "Get Tipped" },
  { value: "Withdrawals", label: "Withdrawals" },
  { value: "Chargebacks", label: "Cashbacks" },
  { value: "Refer & Earn", label: "Refer & Earn" },
];

export const getTransactionStatusOptions = () => [
  {
    value: "Successful",
    label: "Successful",
  },
  {
    value: "Pending",
    label: "Pending",
  },
  {
    value: "Failed",
    label: "Failed",
  },
];

export const getChartsData = () => [
  {
    name: "Apr 1, 2022",
    uv: 4000,
    pv: 1400,
    amt: 6400,
  },
  {
    uv: 1000,
    pv: 2398,
    amt: 6210,
  },
  {
    uv: 2000,
    pv: 2600,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 2008,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 1800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 2530,
    amt: 2500,
  },
  {
    uv: 2390,
    pv: 2800,
    amt: 2500,
  },
  {
    uv: 2390,
    pv: 2800,
    amt: 2500,
  },
  {
    uv: 2390,
    pv: 2400,
    amt: 2500,
  },
  {
    name: "Apr 30, 2022",
    uv: 3490,
    pv: 1400,
    amt: 2100,
  },
];
