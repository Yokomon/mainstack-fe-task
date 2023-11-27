"use client";

import React, { Fragment } from "react";
import clsx from "clsx";
import { IoIosNotificationsOutline } from "@react-icons/all-files/io/IoIosNotificationsOutline";
import { BsChatLeftText } from "@react-icons/all-files/bs/BsChatLeftText";
import { IoMenuOutline } from "@react-icons/all-files/io5/IoMenuOutline";
import { Menu, Transition } from "@headlessui/react";

import { userMenu } from "@/app/constants/users";
import { User } from "@/app/types/User";

interface UserActionsProps {
  data: User;
}

const UserActions: React.FC<UserActionsProps> = ({ data }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="rounded-full hover:bg-gray-100 duration-500 cursor-pointer p-2">
        <IoIosNotificationsOutline size={25} />
      </div>
      <div className="rounded-full hover:bg-gray-100 duration-500 cursor-pointer p-3">
        <BsChatLeftText size={18} />
      </div>
      <div className="relative">
        <Menu>
          <Menu.Button
            aria-label="user-menu"
            className="flex items-center space-x-2 rounded-full p-1 hover:shadow-sm duration-500 pr-3 bg-gray-100 hover:bg-gray-200"
          >
            <div className="rounded-full p-2 px-3 bg-gradient-to-r from-black/60 to-black text-white">
              <h4 className="text-sm uppercase">
                {data.first_name.charAt(0)}
                {data.last_name.charAt(0)}
              </h4>
            </div>
            <IoMenuOutline size={25} className="text-gray-500" />
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
            <Menu.Items className="absolute space-y-3 right-0 font-medium mt-8 w-96 pb-8 origin-top-right rounded-lg bg-white shadow-xl p-3 ring-1 ring-black/5 focus:outline-none">
              <div className="flex space-x-4 mt-3 !mb-10">
                <button className="rounded-full w-12 h-12 flex shadow-sm bg-gradient-to-r from-rose-100/40 to-black items-center justify-center bg-black text-white">
                  <h4>
                    {data.first_name.charAt(0)}
                    {data.last_name.charAt(0)}
                  </h4>
                </button>
                <div className="text-lg space-y-1.5">
                  <h3>
                    {data.first_name} {data.last_name}
                  </h3>
                  <h5 className="text-gray-500 text-sm">{data.email}</h5>
                </div>
              </div>
              {userMenu.map(({ icon, actionTitle }) => (
                <Menu.Item key={actionTitle}>
                  <button
                    className={clsx({
                      ["flex group text-sm rounded-full tracking-tight hover:shadow-sm duration-500 items-center space-x-5 p-3 w-full"]:
                        true,
                      ["hover:bg-rose-50 text-rose-500"]:
                        actionTitle === "Sign out",
                      ["hover:bg-gray-100"]: actionTitle !== "Sign out",
                    })}
                  >
                    {React.createElement(icon, { size: 22 })}
                    <div className="flex flex-1 flex-col items-start">
                      <h3>{actionTitle}</h3>
                    </div>
                  </button>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default UserActions;
