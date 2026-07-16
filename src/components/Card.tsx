import type { Card } from "../types";

interface CardProps {
  card: Card;
  onFlip: (id: number) => void;
}

function CardComponent({ card, onFlip }: CardProps) {
  return (
    <div onClick={() => onFlip(card.id)}>
      {card.isFlipped ? card.number : "?"}
    </div>
  );
}

export default CardComponent;
