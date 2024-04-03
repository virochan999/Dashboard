import {
  BadgeDollarSign,
  NotebookText,
  CircleDollarSign,
  ShoppingBasket,
} from "lucide-react";
import Card from "./Card";

const cardData = [
  {
    id: 1,
    title: "Earning",
    price: "198K",
    growth: {
      status: "up",
      value: "37.8%",
    },
    icon: <BadgeDollarSign color="#00ff00" />,
    color: "bg-[#00ff00]",
  },
  {
    id: 2,
    title: "Orders",
    price: "2.4K",
    growth: {
      status: "down",
      value: "2%",
    },
    icon: <NotebookText color="#ff00b7" />,
    color: "bg-[#ff00b7]",
  },
  {
    id: 3,
    title: "Balance",
    price: "2.4",
    growth: {
      status: "down",
      value: "2%",
    },
    icon: <CircleDollarSign color="#0000ff" />,
    color: "bg-[#0000ff]",
  },
  {
    id: 4,
    title: "Total Sales",
    price: "89K",
    growth: {
      status: "up",
      value: "11%",
    },
    icon: <ShoppingBasket color="#ff0000" />,
    color: "bg-[#ff0000]",
  },
];

const CardPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {cardData.map((card) => (
        <Card
          key={card.id}
          card={card}
        />
      ))}
    </div>
  );
};

export default CardPanel;
