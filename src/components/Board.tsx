import type { Card } from "../types";
import CardComponent from "./Card";
import "./Board.css";

interface BoardProps {
  cards: Card[];
  onFlip: (id: number) => void;
}

function BoardComponent({ cards, onFlip }: BoardProps) {
  return (
    <div className="board">
      {cards.map((card) => (
        <CardComponent key={card.id} card={card} onFlip={onFlip} />
      ))}
    </div>
  );
}

export default BoardComponent;
