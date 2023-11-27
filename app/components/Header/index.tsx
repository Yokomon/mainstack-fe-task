import Image from "next/image";
import Link from "next/link";

import AppNavigation from "./AppNavigation";
import UserActions from "./UserActions";
import { fetchUserDetails } from "@/app/handlers/fetchUserDetails";

export const revalidate = 0;

const Header = async () => {
  const userData = await fetchUserDetails();

  return (
    <header className="inset-0 sticky z-10">
      <nav>
        <div className="flex w-full items-center justify-between shadow-md mx-2 px-4 rounded-full p-3 bg-white">
          <Link href={"/"}>
            <Image
              width={35}
              height={50}
              alt="mainstack_logo"
              src="/images/company_assets/mainstack-logo.png"
            />
          </Link>
          <AppNavigation />
          <UserActions data={userData!} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
