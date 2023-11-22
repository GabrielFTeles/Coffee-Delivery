import { z } from "zod";
import { useCart } from "../../hooks/useCart";
import { zodResolver } from "@hookform/resolvers/zod";
import { currencyFormarter } from "../../utils/currencyFormater";
import { FormProvider, useForm } from "react-hook-form";

import { AddressForm } from "./components/AddressForm";
import { SelectedProduct } from "./components/SelectedProduct";
import { MethodsOfPayment } from "./components/MethodsOfPayment";

import {
  CardDescription,
  CheckoutContainer,
  FinishOrder,
  FirstColumn,
  PaymentCard,
  ProductsSelectedList,
  SecondColumn,
  TotalPriceWrapper,
  Separator,
  EmptyCart,
} from "./styles";

import emptyCartIMG from "../../assets/empty-cart.svg";

import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";

const paymentFormSchema = z.object({
  cep: z.string().length(8),
  logradouro: z.string().min(1),
  complemento: z.string().max(50).optional(),
  bairro: z.string().min(1),
  numero: z.string().min(1),
  localidade: z.string().min(1),
  uf: z.string().length(2),
  method: z.enum(["credit", "debit", "money"]),
});

export type PaymentFormData = z.infer<typeof paymentFormSchema>;

const initialValue: PaymentFormData = {
  cep: "",
  logradouro: "",
  complemento: "",
  bairro: "",
  localidade: "",
  numero: "",
  uf: "",
  method: "credit",
};

export function Checkout() {
  const { cart } = useCart();

  const paymentHookForm = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: initialValue,
  });

  const {
    formState: { isValid },
  } = paymentHookForm;

  const freight = isValid ? 3.5 : 0;
  const totalCartPrice = cart.totalPrice + freight;
  const isCartEmpty = cart.items.length <= 0;
  const isSubmitValid = !isCartEmpty && isValid;

  return (
    <FormProvider {...paymentHookForm}>
      <CheckoutContainer>
        <FirstColumn>
          <h2>Complete seu pedido</h2>

          <PaymentCard>
            <CardDescription $iconColor="yellow-500">
              <MapPinLine size={22} weight="bold" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CardDescription>

            <AddressForm />
          </PaymentCard>

          <PaymentCard>
            <CardDescription $iconColor="purple-300">
              <CurrencyDollar size={22} weight="bold" />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </CardDescription>

            <MethodsOfPayment />
          </PaymentCard>
        </FirstColumn>

        <SecondColumn>
          <h2>Cafés selecionados</h2>
          <FinishOrder>
            <div>
              <ProductsSelectedList>
                {isCartEmpty && (
                  <EmptyCart>
                    <img src={emptyCartIMG} />
                    <p>
                      Você ainda não possui nenhum produto adicionado ao
                      carrinho.
                    </p>
                  </EmptyCart>
                )}
                {cart.items.map((item) => (
                  <SelectedProduct key={item.product.id} item={item} />
                ))}
              </ProductsSelectedList>

              <Separator />
            </div>

            <TotalPriceWrapper>
              <div>
                <span>Total de itens</span>
                <span>{currencyFormarter(cart.totalPrice)}</span>
              </div>

              <div>
                <span>Entrega</span>
                <span>{currencyFormarter(freight)}</span>
              </div>

              <div>
                <span>Total</span>
                <span>{currencyFormarter(totalCartPrice)}</span>
              </div>
            </TotalPriceWrapper>

            <button type="submit" disabled={!isSubmitValid} form="address-form">
              Confirmar Pedido
            </button>
          </FinishOrder>
        </SecondColumn>
      </CheckoutContainer>
    </FormProvider>
  );
}
