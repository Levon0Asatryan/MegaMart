import Image from "next/image";
import Link from "next/link";
import Search from "../Search";

type Props = {
  setBotNavOpened: Function;
};

const MidNav = ({ setBotNavOpened }: Props) => {
  return (
    <nav>
      <div className=" flex justify-between items-center h-16 md:h-20 px-8 md:px-20 border-b-1 border-border">
        <div className="flex items-center">
          <Image
            src="/more.svg"
            height={43}
            width={43}
            alt="more"
            className="mr-2 cursor-pointer h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 active:p-0.5 "
            onClick={() => {
              setBotNavOpened((prev: Boolean) => !prev);
            }}
          />
          <Link
            href="/"
            className="text-primary text-base sm:text-xl md:text-2xl font-semibold"
          >
            MegaMart
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex">
            <Search className="" />
          </div>
          <div className="flex ml-6 justify-center items-center">
            <div className="flex mr-3 items-center ">
              <Image
                src="/user.svg"
                height={21}
                width={21}
                alt="user"
                className="mr-1 h-3 w-3 sm:h-4 sm:w-4 md:h-6  md:w-6"
              />
              <div className="mid-text cursor-pointer">Sign Up</div>
              <div className="mid-text">/</div>
              <div className="mid-text cursor-pointer">Sign In</div>
            </div>
            <div className="mid-text mr-3 items-center">|</div>
            <div className="flex cursor-pointer items-center ">
              <Image
                src="/Buy.svg"
                height={21}
                width={21}
                alt="Buy"
                className="mr-1 h-3 w-3 sm:h-4 sm:w-4 md:h-6  md:w-6"
              />
              <div className="mid-text ">Cart</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" justify-center items-center h-14 w-full  px-8  border-b-1 border-border flex md:hidden">
        <Search className="search-under" />
      </div>
    </nav>
  );
};

export default MidNav;
