"use client";

import { useState } from "react";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { PiDownloadSimple } from "@react-icons/all-files/pi/PiDownloadSimple";

import Modal from "../Modal";
import { Transaction } from "@/app/types/Transaction";
import TransactionDetail from "./components/TransactionDetail";
import Button from "../Modal/components/Button";
import ModalBody from "./components/ModalBody";

interface TransactionProps {
  data: Transaction<string>["data"];
}

const Transaction: React.FC<TransactionProps> = ({ data }) => {
  const [modalState, setModalState] = useState(false);

  const closeModal = () => setModalState(() => false);
  const openModal = () => setModalState(() => true);

  return (
    <>
      <Modal
        title="Filter"
        isOpen={modalState}
        onClose={closeModal}
        body={<ModalBody />}
        footer={
          <div className="flex items-center space-x-4 px-4">
            <Button onClick={closeModal}>Clear</Button>
            <Button onClick={closeModal} className="bg-black text-white">
              Apply
            </Button>
          </div>
        }
      />
      <div>
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold tracking-wide">
            <h2>{data.length} Transactions</h2>
            <p className="text-sm text-gray-500 font-normal">
              Your transactions for the last 7 days
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <button
              onClick={openModal}
              className="p-3 px-6 flex items-center font-semibold text-gray-700 space-x-2 rounded-full bg-gray-200/60 hover:bg-gray-300/60 duration-500"
            >
              <h3>Filter</h3>
              <MdKeyboardArrowDown size={18} className="mt-1" />
            </button>
            <button className="p-3 px-6 flex items-center font-semibold text-gray-700 space-x-3 rounded-full bg-gray-200/60 hover:bg-gray-300/60 duration-500">
              <h3>Export list</h3>
              <PiDownloadSimple size={18} className="mt-1" />
            </button>
          </div>
        </div>
        <hr className="mt-6" />
        <div className="py-6 space-y-8">
          {data.map(({ type, metadata, amount, date, status }, idx) => (
            <TransactionDetail
              key={idx}
              type={type}
              title={
                metadata?.product_name ?? metadata?.type ?? "Cash withdrawal"
              }
              amount={amount}
              date={date}
              subTitle={metadata?.name ?? status}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Transaction;
