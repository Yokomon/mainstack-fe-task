import React from "react";
import { TbFolderFilled } from "@react-icons/all-files/tb/TbFolderFilled";
import Image from "next/image";

export const appsDropdown = [
  {
    appImage: React.createElement(Image, {
      src: "/images/product_assets/product_icons.svg",
      width: 32,
      height: 50,
      alt: "product-img",
      className: "mx-auto",
    }),
    appTitle: "Link in bio",
    appSubtitle: "Manage your link in your bio",
  },
  {
    appImage: React.createElement(Image, {
      src: "/images/product_assets/appbar.svg",
      width: 32,
      height: 50,
      alt: "appbar-image",
      className: "mx-auto",
    }),
    appTitle: "Store",
    appSubtitle: "Manage your store activities",
  },
  {
    appImage: React.createElement(Image, {
      src: "/images/product_assets/appbar_2.svg",
      width: 32,
      height: 50,
      alt: "appbar2-image",
      className: "mx-auto",
    }),
    appTitle: "Media kit",
    appSubtitle: "Manage your media kit",
  },
  {
    appImage: React.createElement(Image, {
      src: "/images/product_assets/appbar_3.svg",
      width: 32,
      height: 50,
      alt: "appbar2-image",
      className: "mx-auto",
    }),
    appTitle: "Invoicing",
    appSubtitle: "Manage your invoices",
  },
  {
    appIcon: TbFolderFilled,
    appTitle: "Bookings",
    appSubtitle: "Manage your bookings",
  },
];
