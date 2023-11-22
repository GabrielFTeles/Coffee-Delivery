import { useState } from "react";
import { CounterContainer } from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";

interface CounterProps {
  onQuantityUpdate: (quantity: number) => void;
  initialCounterValue?: number;
}

export function Counter({
  onQuantityUpdate,
  initialCounterValue = 1,
}: CounterProps) {
  const [quantity, setQuantity] = useState(initialCounterValue);

  function handleIncrement() {
    if (quantity >= 99) return;

    setQuantity((prevState) => prevState + 1);

    onQuantityUpdate(quantity + 1);
  }

  function handleDecrement() {
    if (quantity <= 1) return;

    setQuantity((prevState) => prevState - 1);

    onQuantityUpdate(quantity - 1);
  }

  return (
    <CounterContainer>
      <button onClick={handleDecrement}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  );
}
