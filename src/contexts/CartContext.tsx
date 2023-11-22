import { ReactNode, createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cart/reducer";
import { ProductType } from "../pages/Home";
import {
  addItemToCartAction,
  changeProductQuantityInCartAction,
  clearCartAction,
  removeItemFromCartAction,
} from "../reducers/cart/actions";

interface CartContextProviderProps {
  children: ReactNode;
}

export interface ProductInCart {
  product: ProductType;
  quantity: number;
}

export interface CartType {
  items: ProductInCart[];
  totalItems: number;
  totalPrice: number;
}

interface CartContextType {
  cart: CartType;
  clearCart: () => void;
  removeItemFromCart: (productID: string | number) => void;
  addItemToCart: ({ product, quantity }: ProductInCart) => void;
  changeProductQuantityInCart: ({ product, quantity }: ProductInCart) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
      totalItems: 0,
      totalPrice: 0,
    } as CartType,
    (initialState) => {
      const cartAsJSON = localStorage.getItem("@coffee-delivery:cart-1.0.0");

      if (cartAsJSON) {
        return JSON.parse(cartAsJSON);
      }

      return initialState;
    }
  );

  function addItemToCart({ product, quantity }: ProductInCart) {
    dispatch(addItemToCartAction({ product, quantity }));
  }

  function changeProductQuantityInCart({ product, quantity }: ProductInCart) {
    dispatch(changeProductQuantityInCartAction({ product, quantity }));
  }

  function removeItemFromCart(productID: string | number) {
    dispatch(removeItemFromCartAction(productID));
  }

  function clearCart() {
    dispatch(clearCartAction());
  }

  useEffect(() => {
    const cartJSON = JSON.stringify(cart);

    localStorage.setItem("@coffee-delivery:cart-1.0.0", cartJSON);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        changeProductQuantityInCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
