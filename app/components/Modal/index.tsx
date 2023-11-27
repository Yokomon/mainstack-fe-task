"use client";

import { GrFormClose } from "@react-icons/all-files/gr/GrFormClose";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  body: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  body,
  title,
  onClose,
  footer,
}) => {
  return (
    <>
      <Transition as={Fragment} appear show={isOpen}>
        <Dialog as="div" className={"z-50 relative"} onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-300/80" />
          </Transition.Child>
          <div className="fixed right-0 top-0 overflow-y-auto">
            <div className="flex items-center min-h-full justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                leave="ease-in duration-200"
              >
                <Dialog.Panel className="w-[30rem] h-[97vh] flex flex-col rounded-3xl overflow-hidden transform bg-white p-6 shadow-md text-left align-middle transition-all">
                  <Dialog.Title
                    as="div"
                    className={
                      "text-xl font-medium leading-6 text-gray-900 flex items-center justify-between"
                    }
                  >
                    <h3>{title} </h3>
                    <GrFormClose
                      size={40}
                      onClick={onClose}
                      className={clsx({
                        ["cursor-pointer hover:bg-gray-200 p-2 rounded-full duration-500"]:
                          true,
                      })}
                    />
                  </Dialog.Title>
                  <Dialog.Description as="div" className={"my-4 text-base"}>
                    {body}
                  </Dialog.Description>
                  <Dialog.Panel as="div" className="mt-auto">
                    {footer}
                  </Dialog.Panel>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
