import { useEffect, useState } from "react";
import {
  DeliveryFeatures,
  HeroContent,
  HeroSection,
  HomeContainer,
  ProductsList,
  ProductsSection,
} from "./styles";

import { ProductCard } from "../../components/ProductCard";
import { BadgeWithText } from "../../components/BadgeWithText";

import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from "@phosphor-icons/react";

import coffeeHeroImage from "../../assets/coffee-hero-image.png";

export type ProductType = {
  id: number;
  name: string;
  image_url: string;
  tags: string[];
  description: string;
  price: number;
};

interface ProductsApiResponse {
  products: ProductType[];
}

export function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function getProducts() {
      const url = "src/mocks/products.json";

      const apiResponse = await fetch(url);
      const responseInJSON: ProductsApiResponse = await apiResponse.json();

      setProducts(responseInJSON.products);
    }

    getProducts();
  }, []);

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <DeliveryFeatures>
            <div>
              <BadgeWithText badge={ShoppingCartSimple} badgeColor="yellow-500">
                <p>Compra simples e segura</p>
              </BadgeWithText>

              <BadgeWithText badge={Timer} badgeColor="yellow-300">
                <p>Entrega rápida e rastreada</p>
              </BadgeWithText>
            </div>

            <div>
              <BadgeWithText badge={Package} badgeColor="brown-300">
                <p>Embalagem mantém o café intacto</p>
              </BadgeWithText>

              <BadgeWithText badge={Coffee} badgeColor="purple-300">
                <p>O café chega fresquinho até você</p>
              </BadgeWithText>
            </div>
          </DeliveryFeatures>
        </HeroContent>

        <img src={coffeeHeroImage} />
      </HeroSection>

      <ProductsSection>
        <h2>Nossos cafés</h2>

        <ProductsList>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsList>
      </ProductsSection>
    </HomeContainer>
  );
}
