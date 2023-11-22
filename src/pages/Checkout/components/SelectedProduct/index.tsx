import { useCart } from "../../../../hooks/useCart";

import {
  CoffeeWrapper,
  ProductControls,
  SelectedProductContainer,
} from "./styles";

import { Counter } from "../../../../components/Counter";

import { ProductInCart } from "../../../../contexts/CartContext";
import { Trash } from "@phosphor-icons/react";
import { currencyFormarter } from "../../../../utils/currencyFormater";

interface SelectedProductProps {
  item: ProductInCart;
}

export function SelectedProduct({ item }: SelectedProductProps) {
  const { changeProductQuantityInCart, removeItemFromCart } = useCart();
  const { product, quantity } = item;

  const totalProductPrice = product.price * quantity;

  function onQuantityUpdate(quantityUpdated: number) {
    changeProductQuantityInCart({
      product,
      quantity: quantityUpdated,
    });
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(product.id);
  }

  return (
    <SelectedProductContainer>
      <CoffeeWrapper>
        <img src={`./src/assets/${product.image_url}`} alt="" />
        <div>
          <h3>{product.name}</h3>

          <ProductControls>
            <Counter
              onQuantityUpdate={onQuantityUpdate}
              initialCounterValue={quantity}
            />

            <button onClick={handleRemoveItemFromCart}>
              <Trash size={16} weight="bold" />
              REMOVER
            </button>
          </ProductControls>
        </div>
      </CoffeeWrapper>

      <span>{currencyFormarter(totalProductPrice)}</span>
    </SelectedProductContainer>
  );
}
