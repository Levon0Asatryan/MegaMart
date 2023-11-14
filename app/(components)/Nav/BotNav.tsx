import NavButton from "./NavButton";

const buttons = [
  { text: "Groceries", active: true },
  { text: "Premium Fruits", active: false },
  { text: "Home & Kitchen", active: false },
  { text: "Fashion", active: false },
  { text: "Electronics", active: false },
  { text: "Beauty", active: false },
  { text: "Home Improvment", active: false },
  { text: "Sports, Toys & Luggage", active: false },
];

const BotNav = () => {
  return (
    <nav className="grid lg:grid-cols-8 justify-between items-center  px-8 py-2 md:px-20 border-b-1 border-border sm:grid-cols-4 grid-cols-2 gap-2">
      {buttons.map(({ text, active }) => (
        <NavButton text={text} active={active} key={text} />
      ))}
    </nav>
  );
};

export default BotNav;
