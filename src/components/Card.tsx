import { ArrowUp, ArrowDown } from "lucide-react";
import { ReactNode } from "react";

type CardPropTypes = {
  id: number;
  title: string;
  price: string;
  growth: {
    status: string;
    value: string;
  };
  icon: ReactNode;
  color: string;
};

const Card = ({ card }: { card: CardPropTypes }) => {
  return (
    <div className="flex gap-2 bg-white p-4 rounded-md">
      <div
        className={`w-20 h-20 flex items-center justify-center rounded-full bg-opacity-30 ${card.color}`}
      >
        {card.icon}
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-xs  opacity-40">{card.title}</h1>
        <span className="font-bold text-xl">${card.price}</span>
        <span
          className={`text-sm ${
            card.growth.status === "up" ? "text-green-500" : "text-red-500"
          } flex items-center font-bold gap-1`}
        >
          {card.growth.status === "up" ? (
            <ArrowUp size={14} />
          ) : (
            <ArrowDown size={14} />
          )}
          <p>{card.growth.value}</p>
          <p className="text-black">this month</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
