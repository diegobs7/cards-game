import { useState, useEffect } from "react";
import type { Card } from "./types";
import BoardComponent from "./components/Board";
import "./App.css";

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
  const [selected, setSelected] = useState<number[]>([]);
  const [attemps, setAttemps] = useState(0);

  useEffect(() => {
    if (selected.length !== 2) return;

    const [firstId, secondId] = selected;
    const firstCard = cards.find((card) => card.id === firstId);
    const secondCard = cards.find((card) => card.id === secondId);

    if (!firstCard || !secondCard) return;

    setAttemps((prev) => prev + 1);

    if (firstCard.number === secondCard.number) {
      setCards(
        cards.map((card) =>
          card.id === firstId || card.id === secondId
            ? { ...card, isMatched: true }
            : card,
        ),
      );

      setSelected([]);
    } else {
      setTimeout(() => {
        setCards(
          cards.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, isFlipped: false }
              : card,
          ),
        );
        setSelected([]);
      }, 1000);
    }
  }, [selected]);

  const handleFlip = (id: number) => {
    if (selected.length === 2) return;
    const card = cards.find((card) => card.id === id);
    if (!card || card.isFlipped || card.isMatched) return;

    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isFlipped: true } : card,
      ),
    );

    setSelected([...selected, id]);
  };

  return (
    <div className="app">
      <p> Intentos: {attemps}</p>
      <BoardComponent cards={cards} onFlip={handleFlip} />
    </div>
  );
}

export default App;
