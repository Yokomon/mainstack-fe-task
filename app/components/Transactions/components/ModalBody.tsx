"use client";

import React, { useState } from "react";
import { DateRangePicker } from "react-nice-dates";
import { enGB } from "date-fns/locale";

import SelectDropdown from "../../MultiSelectDropdown";
import {
  getTransactionStatusOptions,
  getTransactionTypeOptions,
} from "@/app/utils";
import ModalButton from "./ModalButton";

const ModalBody = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const trasactionOptions = getTransactionTypeOptions();
  const transactionStatusOptions = getTransactionStatusOptions();

  return (
    <div className="space-y-5 py-2" data-testid="modalbody">
      <div className="flex items-center justify-between">
        <ModalButton text="Today" />
        <ModalButton text="Last 7 days" />
        <ModalButton text="This month" />
        <ModalButton text="Last 3 months" />
      </div>
      <div className="my-5 space-y-2">
        <h3>Date Range</h3>
        <div className="relative flex items-center justify-between">
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            //@ts-expect-error
            onStartDateChange={setStartDate}
            //@ts-expect-error
            onEndDateChange={setEndDate}
            minimumDate={new Date()}
            minimumLength={1}
            format="dd MMM yyyy"
            locale={enGB}
          >
            {({ startDateInputProps, endDateInputProps, focus }) => (
              <div className="space-x-8">
                <input {...startDateInputProps} placeholder="Start date" />
                <input {...endDateInputProps} placeholder="End date" />
              </div>
            )}
          </DateRangePicker>
        </div>
      </div>
      <SelectDropdown options={trasactionOptions} name="Transaction Type" />
      <SelectDropdown
        options={transactionStatusOptions}
        name="Transaction Status"
      />
    </div>
  );
};

export default ModalBody;
