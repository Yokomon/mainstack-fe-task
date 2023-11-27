import Image from "next/image";
import React from "react";

export const productActions = [
  {
    image: React.createElement(Image, {
      alt: "appbar_image_1",
      width: 30,
      height: 50,
      src: "/images/product_assets/product_icons.svg",
      className: "mx-auto",
    }),
    tooltipText: "Link in Bio",
  },
  {
    image: React.createElement(Image, {
      alt: "appbar_image_2",
      width: 45,
      height: 50,
      src: "/images/product_assets/appbar.svg",
      className: "mx-auto",
    }),
    tooltipText: "Store",
  },
  {
    image: React.createElement(Image, {
      alt: "appbar_image_3",
      width: 45,
      height: 50,
      src: "/images/product_assets/appbar_2.svg",
      className: "mx-auto",
    }),
    tooltipText: "Media kit",
  },
  {
    image: React.createElement(Image, {
      alt: "appbar_image_3",
      width: 45,
      height: 50,
      src: "/images/product_assets/appbar_3.svg",
      className: "mx-auto",
    }),
    tooltipText: "Invoicing",
  },
];
