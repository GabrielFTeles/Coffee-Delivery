import { useContext } from "react";
import { AddressContext } from "../contexts/AddressContext";

export const useAddress = () => useContext(AddressContext);
