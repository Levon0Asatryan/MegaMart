import Image from "next/image";

type Props = {
  text: string;
  active?: boolean;
};

const NavButton = ({ text, active = false }: Props) => {
  return (
    <div
      className={`h-10 ${
        active ? "bg-primary text-white " : "bg-background3 text-heading"
      } px-4 flex justify-center items-center rounded-3xl cursor-pointer lg:text-xsm text-xs`}
    >
      {text}
      {active ? (
        <Image
          src="/Arrow-Down2.svg"
          height={18}
          width={18}
          alt="Arrow"
          className="ml-1 "
        />
      ) : (
        <Image
          src="/Arrow-Down1.svg"
          height={18}
          width={18}
          alt="Arrow"
          className="ml-1"
        />
      )}
    </div>
  );
};

export default NavButton;
