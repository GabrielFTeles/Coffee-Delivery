import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes/LightTheme";
import { CartContextProvider } from "./contexts/CartContext";
import { AddressContextProvider } from "./contexts/AddressContext";

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <AddressContextProvider>
            <Router />
          </AddressContextProvider>
        </CartContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
