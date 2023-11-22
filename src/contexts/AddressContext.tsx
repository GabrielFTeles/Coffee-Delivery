import { ReactNode, createContext, useEffect, useState } from "react";

interface addressType {
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  localidade: string;
  numero: string;
  uf: string;
}

interface AddressContextType {
  addressData: addressType;
  saveUserAddress: (address: addressType) => void;
}

export const AddressContext = createContext({} as AddressContextType);

interface AddressContextProps {
  children: ReactNode;
}

export function AddressContextProvider({ children }: AddressContextProps) {
  const [addressData, setAddressData] = useState<addressType>({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    numero: "",
    uf: "",
  });

  function saveUserAddress(address: addressType) {
    setAddressData(address);

    const userAddress = JSON.stringify(address);

    localStorage.setItem("@coffee-delivery:address-1.0.0", userAddress);
  }

  useEffect(() => {
    const userAddressAsJSON = localStorage.getItem(
      "@coffee-delivery:address-1.0.0"
    );

    if (userAddressAsJSON) {
      setAddressData(JSON.parse(userAddressAsJSON));
    }
  }, []);

  return (
    <AddressContext.Provider
      value={{
        addressData,
        saveUserAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
