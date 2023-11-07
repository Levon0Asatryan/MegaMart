import NavButton from "../NavButton";

const BotNav = () => {
  return (
    <nav className="flex justify-between items-center h-16 px-8 md:px-20 border-b-1 border-border">
      <NavButton text="Groceries" active />
      <NavButton text="Premium Fruits" />
      <NavButton text="Home & Kitchen" />
      <NavButton text="Fashion" />
      <NavButton text="Electronics" />
      <NavButton text="Beauty" />
      <NavButton text="Home Improvment" />
      <NavButton text="Sports, Toys & Luggage" />
    </nav>
  );
};

export default BotNav;
