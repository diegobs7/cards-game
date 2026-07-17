import type { Card } from "../types";
import "./Card.css";

interface CardProps {
  card: Card;
  onFlip: (id: number) => void;
}

function CardComponent({ card, onFlip }: CardProps) {
  return (
    <div
      className={card.isFlipped ? "card card-front" : "card card-back"}
      onClick={() => onFlip(card.id)}
    >
      {card.isFlipped ? card.number : "?"}
    </div>
  );
}

export default CardComponent;
