"use client";

import React, { Fragment, useMemo, useState } from "react";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";

import { appsDropdown } from "@/app/constants/navbar";
import { HEADER_TITLE, getHeaderNavs } from "@/app/utils";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import Link from "next/link";

const AppNavigation = () => {
  const [navPath, setNavPath] = useState<keyof typeof HEADER_TITLE>("Revenue");

  const headerNavs = useMemo(() => getHeaderNavs(navPath), [navPath]);
  return (
    <div className="flex items-center space-x-2 xl:ml-32">
      {headerNavs.map(({ headerTitle, icon, headerImage, active }) => (
        <Link
          href={"/"}
          onClick={() => setNavPath(headerTitle)}
          key={headerTitle}
          className={clsx({
            ["p-2.5 flex items-center space-x-2 duration-500 cursor-pointer rounded-full px-5 text-sm "]:
              true,
            ["bg-black p-3 rounded-full text-white"]: active,
            ["hover:bg-gray-100 hover:text-gray-600"]: !active,
          })}
        >
          {icon ? React.createElement(icon, { size: 18 }) : headerImage}
          <h3>{headerTitle}</h3>
        </Link>
      ))}
      <div className="relative">
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                className={clsx({
                  ["p-2.5 flex items-center space-x-2 duration-500  rounded-full px-5 text-sm"]:
                    true,
                  ["bg-black text-white"]: open,
                  ["hover:bg-gray-100"]: !open,
                })}
              >
                <Image
                  src="/images/navbar_assets/widgets.svg"
                  width={20}
                  height={20}
                  alt="widgets"
                  className={clsx({
                    ["brightness-[100]"]: open,
                  })}
                />
                <h3>Apps</h3>
                {open ? (
                  <div
                    className={clsx({
                      ["opacity-100 !flex items-center space-x-3"]: true,
                    })}
                  >
                    <h3 className="text-sm pl-3">Link in Bio</h3>
                    <MdKeyboardArrowDown size={18} />
                  </div>
                ) : null}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute space-y-3 left-0 mt-3 w-96 pb-8 origin-top-left rounded-lg bg-white shadow-xl p-3 ring-1 ring-black/5 focus:outline-none">
                  {appsDropdown.map(
                    ({ appTitle, appSubtitle, appIcon, appImage }) => (
                      <Menu.Item key={appTitle}>
                        <button className="flex group items-center space-x-5 hover:ring-1 ring-gray-100 pr-10 p-2 py-4 rounded-xl w-full hover:shadow-md duration-500">
                          <div className="rounded-lg border border-gray-100 p-2">
                            {appImage ? (
                              appImage
                            ) : (
                              <div className="p-1.5">
                                {React.createElement(appIcon, {
                                  size: 22,
                                  className: "text-sky-600",
                                })}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-1 flex-col items-start">
                            <h2>{appTitle}</h2>
                            <p className="text-sm text-gray-500">
                              {appSubtitle}
                            </p>
                          </div>
                          <IoIosArrowForward className="opacity-0 duration-500 group-hover:opacity-100" />
                        </button>
                      </Menu.Item>
                    )
                  )}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default AppNavigation;
