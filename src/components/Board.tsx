import type { Card } from "../types";
import CardComponent from "./Card";

interface BoardProps {
  cards: Card[];
  onFlip: (id: number) => void;
}

function BoardComponent({ cards, onFlip }: BoardProps) {
  return (
    <div>
      {cards.map((card) => (
        <CardComponent key={card.id} card={card} onFlip={onFlip} />
      ))}
    </div>
  );
}

export default BoardComponent;
