import { useState } from "react";
import type { Card } from "./types";
import BoardComponent from "./components/Board";

const generateCards = (): Card[] => {
  const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  return numbers.map((number, index) => ({
    id: index,
    number: number,
    isFlipped: false,
    isMatched: false,
  }));
};

function App() {
  const [cards, setCards] = useState<Card[]>(generateCards());

  const handleFlip = (id: number) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isFlipped: true } : card,
      ),
    );
  };

  return (
    <div>
      <BoardComponent cards={cards} onFlip={handleFlip} />
    </div>
  );
}

export default App;
