import MidCarousel from "./(components)/MidCarousel";
import MiddleText from "./(components)/MiddleText";
import SmartPhoneCard from "./(components)/SmartPhoneCard";

export type Smartphone = {
  price: number;
  photo: string;
  name: string;
  discount: number;
};

//mock data, before back-end creation
const smartphonesSales: Smartphone[] = [
  {
    price: 950,
    discount: 56,
    name: "Galaxy S22",
    photo: "/smartphone1.png",
  },
  {
    price: 320,
    discount: 40,
    name: "Galaxy M13 (4GB | 64GB)",
    photo: "/smartphone2.png",
  },
  {
    price: 450,
    discount: 60,
    name: "Galaxy M33 (4GB | 64GB)",
    photo: "/smartphone3.png",
  },
  {
    price: 900,
    discount: 65,
    name: "Galaxy M53 (4GB | 64GB)",
    photo: "/smartphone4.png",
  },
  {
    price: 1150,
    discount: 50,
    name: "Galaxy S22 Ultra",
    photo: "/smartphone5.png",
  },
  {
    price: 1150,
    discount: 50,
    name: "Galaxy S22 Ultra",
    photo: "/smartphone5.png",
  },
  {
    price: 1150,
    discount: 50,
    name: "Galaxy S22 Ultra",
    photo: "/smartphone5.png",
  },
];

export default function Dashboard() {
  return (
    <div>
      <MidCarousel />
      <MiddleText mainText="Grab the best deal on" blueText="Smartphones" />
      <div className="px-8 md:px-20">
        <div className="inline-block whitespace-nowrap sm:h-80 h-52 w-full  overflow-x-auto overflow-y-hidden">
          {smartphonesSales.map((smartphone, id) => (
            <SmartPhoneCard
              price={smartphone.price}
              key={id}
              discount={smartphone.discount}
              name={smartphone.name}
              photo={smartphone.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
