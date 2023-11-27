import clsx from "clsx";

import Header from "../Header";
import { productActions } from "@/app/constants/product";
import Tooltip from "../Tooltip";
import Transaction from "../Transactions";
import ProductMenu from "../Products/ProductMenu";
import { fetchWalletDetails } from "@/app/handlers/fetchWalletDetails";
import { fetchTransactionDetails } from "@/app/handlers/fetchTransactionDetails";
import Charts from "./Charts";
import Button from "../Modal/components/Button";

const Home = async () => {
  const walletData = await fetchWalletDetails();
  const transactions = await fetchTransactionDetails();

  return (
    <main className="relative">
      <Header />
      <section className="relative h-full w-full mx-5">
        <div className="fixed p-1 py-2 rounded-full top-72 shadow-2xl bg-white flex items-center flex-col gap-y-2">
          {productActions.map(({ image, tooltipText }, idx) => (
            <Tooltip tooltip={tooltipText} key={idx}>
              <button
                className={clsx({
                  ["grayscale hover:grayscale-0 duration-500 p-1.5 rounded-full hover:bg-gray-100"]:
                    true,
                  ["p-3"]: idx === 0,
                })}
              >
                {image}
              </button>
            </Tooltip>
          ))}
        </div>
        <div className="w-full h-full max-w-6xl mx-auto">
          <div className="flex items-center p-5 pt-16 relative">
            <div className="absolute flex items-center space-x-24 top-24 w-full space-y-2">
              <div>
                <h3 className="text-gray-600">Available Balance</h3>
                <h1 className="font-bold text-4xl">USD {walletData.balance}</h1>
              </div>
              <Button className="bg-black text-white !w-fit py-4 !px-12">
                Withdraw
              </Button>
            </div>
            <div className="w-full h-64 pr-12">
              <Charts />
            </div>
            <ProductMenu data={walletData!} />
          </div>
          <Transaction data={transactions!} />
        </div>
      </section>
    </main>
  );
};

export default Home;
