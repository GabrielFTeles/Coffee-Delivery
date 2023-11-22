import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { MethodsOfPaymentButtons } from "./styles";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { PaymentFormData } from "../..";

export function MethodsOfPayment() {
  const { setValue } = useFormContext<PaymentFormData>();

  const [activePaymentMethod, setActivePaymentMethod] = useState("credit");

  enum MethodOptions {
    credit = "credit",
    debit = "debit",
    money = "money",
  }

  function handleUpdateActiveMethod(method: MethodOptions) {
    if (activePaymentMethod === method) return;

    setValue("method", method);
    setActivePaymentMethod(method);
  }

  const isCreditActive = activePaymentMethod === "credit";
  const isDebitActive = activePaymentMethod === "debit";
  const isMoneyActive = activePaymentMethod === "money";

  return (
    <MethodsOfPaymentButtons>
      <button
        className={isCreditActive ? "active" : ""}
        onClick={() => handleUpdateActiveMethod(MethodOptions.credit)}
      >
        <CreditCard size={18} weight="bold" />
        Cartão de crédito
      </button>
      <button
        className={isDebitActive ? "active" : ""}
        onClick={() => handleUpdateActiveMethod(MethodOptions.debit)}
      >
        <Bank size={18} weight="bold" />
        Cartão de débito
      </button>
      <button
        className={isMoneyActive ? "active" : ""}
        onClick={() => handleUpdateActiveMethod(MethodOptions.money)}
      >
        <Money size={18} weight="bold" />
        Dinheiro
      </button>
    </MethodsOfPaymentButtons>
  );
}
