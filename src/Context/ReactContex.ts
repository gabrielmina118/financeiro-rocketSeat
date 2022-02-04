import { createContext } from "react";
import {  TransactionContextData } from "../hooks/useTransactions";

export const ReactContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

