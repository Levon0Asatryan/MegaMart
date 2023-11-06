import Image from "next/image";

type Props = {};

const TopNav = (props: Props) => {
  return (
    <nav className="nav">
      <div>Welcome to worldwide Megamart!</div>
      <div className="flex">
        <div className="flex  mx-2 cursor-pointer items-center	">
          <Image
            src="/location.svg"
            height={12}
            width={12}
            alt="location"
            className="icon"
          />
          Deliver to <div className="ml-1 font-medium">423651</div>
        </div>
        <div>|</div>
        <div className="flex mx-2  cursor-pointer items-center	">
          <Image
            src="/iconoir-delivery-truck.svg"
            height={12}
            width={12}
            alt="iconoir-delivery-truck"
            className="icon h-2.5 w-2.5 sm:h-3  sm:w-3 md:h-3.5 md:w-3.5"
          />
          Track your order
        </div>
        <div>|</div>
        <div className="flex cursor-pointer ml-2 items-center	">
          <Image
            src="/Discount.svg"
            height={12}
            width={12}
            alt="Discount"
            className="icon"
          />
          All Offers
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
