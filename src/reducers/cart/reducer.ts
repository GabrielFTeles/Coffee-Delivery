import { CartType } from "../../contexts/CartContext";
import { ActionTypes } from "./actions";

export function cartReducer(state: CartType, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const itemAlreadyInCart = state.items.find(
        (item) => item.product.id === action.payload.product.id
      );

      const totalItems = state.totalItems + action.payload.quantity;
      const totalPrice =
        state.totalPrice +
        action.payload.quantity * action.payload.product.price;

      if (itemAlreadyInCart) {
        const newCartItems = state.items.map((item) => {
          if (item.product.id === action.payload.product.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }

          return item;
        });

        return {
          items: newCartItems,
          totalItems,
          totalPrice,
        };
      }

      const newItem = {
        ...action.payload,
      };

      return {
        items: [...state.items, newItem],
        totalItems,
        totalPrice,
      };
    }

    case ActionTypes.CHANGE_PRODUCT_QUANTITY_IN_CART: {
      const itemsWithUpdatedItem = state.items.map((item) => {
        if (item.product.id === action.payload.product.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }

        return item;
      });

      const totalItems = itemsWithUpdatedItem.reduce((acc, current) => {
        return acc + current.quantity;
      }, 0);

      const totalPrice = itemsWithUpdatedItem.reduce((acc, current) => {
        return acc + current.product.price * current.quantity;
      }, 0);

      return {
        items: itemsWithUpdatedItem,
        totalItems,
        totalPrice,
      };
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const itemsWithoutRemovedItem = state.items.filter(
        (item) => item.product.id !== action.payload.productID
      );

      const totalItems = itemsWithoutRemovedItem.reduce((acc, current) => {
        return acc + current.quantity;
      }, 0);

      const totalPrice = itemsWithoutRemovedItem.reduce((acc, current) => {
        return acc + current.product.price * current.quantity;
      }, 0);

      return {
        items: itemsWithoutRemovedItem,
        totalItems,
        totalPrice,
      };
    }

    case ActionTypes.CLEAR_CART: {
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0,
      };
    }

    default:
      return state;
  }
}
