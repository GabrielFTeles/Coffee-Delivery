import { useState } from "react";
import { useCart } from "../../hooks/useCart";

import { ShoppingCartSimple } from "@phosphor-icons/react";
import { CardControls, Price, ProductCardContainer, TagsList } from "./styles";

import { Counter } from "../Counter";
import { ProductType } from "../../pages/Home";

interface ProductCardProps {
  product: ProductType;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItemToCart } = useCart();

  const [productQuantity, setProductQuantity] = useState(1);

  function handleAddItemToCart() {
    const item = {
      product,
      quantity: productQuantity,
    };

    addItemToCart(item);
  }

  function onQuantityUpdate(quantity: number) {
    setProductQuantity(quantity);
  }

  return (
    <ProductCardContainer>
      <img src={`./src/assets/${product.image_url}`} alt="" />

      <TagsList>
        {product.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsList>

      <h3>{product.name}</h3>
      <p title={product.description}>{product.description}</p>

      <CardControls>
        <Price>
          R${" "}
          <span>
            {product.price.toLocaleString("pt-br", {
              minimumFractionDigits: 2,
            })}
          </span>
        </Price>

        <div>
          <Counter onQuantityUpdate={onQuantityUpdate} />

          <button onClick={handleAddItemToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </CardControls>
    </ProductCardContainer>
  );
}
