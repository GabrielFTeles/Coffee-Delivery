import { NavLink } from "react-router-dom";
import { CartButton, HeaderContainer, LocationButton } from "./styles";

import { ShoppingCartSimple, MapPin } from "@phosphor-icons/react";

import CoffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";
import { useCart } from "../../hooks/useCart";
import { useAddress } from "../../hooks/useAddress";

export function Header() {
  const {
    cart: { totalItems },
  } = useCart();
  const { addressData } = useAddress();

  const isUserAddressStored = addressData.uf && addressData.localidade;

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={CoffeeDeliveryLogo} alt="logo of Coffee Delivery" />
      </NavLink>

      <div>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          {isUserAddressStored &&
            `${addressData.localidade}, ${addressData.uf}`}
        </LocationButton>
        <NavLink to="/checkout">
          <CartButton>
            <span>{totalItems > 9 ? "9+" : totalItems}</span>
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
