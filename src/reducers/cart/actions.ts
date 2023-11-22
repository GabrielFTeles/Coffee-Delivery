import { ProductInCart } from "../../contexts/CartContext";

export enum ActionTypes {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  CHANGE_PRODUCT_QUANTITY_IN_CART = "CHANGE_PRODUCT_QUANTITY_IN_CART",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

export function addItemToCartAction({ product, quantity }: ProductInCart) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      product,
      quantity,
    },
  };
}

export function changeProductQuantityInCartAction({
  product,
  quantity,
}: ProductInCart) {
  return {
    type: ActionTypes.CHANGE_PRODUCT_QUANTITY_IN_CART,
    payload: {
      product,
      quantity,
    },
  };
}

export function removeItemFromCartAction(productID: string | number) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      productID,
    },
  };
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  };
}
