import { MapPin } from "@phosphor-icons/react";
import { BadgeWithText } from "../../components/BadgeWithText";
import {
  FlexWrapper,
  OrderCard,
  SuccessConfirm,
  SuccessContainer,
} from "./styles";

import motoboySVG from "../../assets/motoboy.svg";
import { useLocation } from "react-router-dom";
import { OrderType } from "../Checkout/components/AddressForm";

const paymentMethods = {
  credit: "Vai pagar no Crédito paezão",
  debit: "Tá sobrando dinheiro né, vai pagar logo no débito",
  money: "Vai pagar no papel, nem lembrava que existia isso",
};

interface StateType {
  state: OrderType;
}

export function Success() {
  const {
    state: { address, paymentInfo },
  }: StateType = useLocation();

  return (
    <SuccessContainer>
      <SuccessConfirm>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessConfirm>
      <FlexWrapper>
        <OrderCard>
          <BadgeWithText badge={MapPin} badgeColor="purple-300">
            <p>
              Entrega em{" "}
              <strong>
                {address.logradouro}, {address.numero}
              </strong>
            </p>
            <p>
              {address.bairro} - {address.localidade}, {address.uf}
            </p>
          </BadgeWithText>

          <BadgeWithText badge={MapPin} badgeColor="yellow-300">
            <p>Previsão de entrega</p>
            <p>
              <strong>20 min - 30 min</strong>
            </p>
          </BadgeWithText>

          <BadgeWithText badge={MapPin} badgeColor="yellow-500">
            <p>Pagamento na entrega</p>
            <p>
              <strong>
                {
                  paymentMethods[
                    paymentInfo.method as keyof typeof paymentMethods
                  ]
                }
              </strong>
            </p>
          </BadgeWithText>
        </OrderCard>

        <img src={motoboySVG} />
      </FlexWrapper>
    </SuccessContainer>
  );
}
