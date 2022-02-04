import { ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../components/services/api";
import { ReactContext } from "../Context/ReactContex";

export interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createAt: string
}

export type TransactionInput = Omit<Transaction, 'id' | 'createAt'>

interface TransactionProviderProps {
    children: ReactNode
}

export interface TransactionContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const ReactStateProvider = ({ children }: TransactionProviderProps) => {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(res => setTransactions(res.data.transactions))
    }, [])

    async function createTransaction(transactionI: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionI,
            createAt: new Date()
        })
        const { transaction } = response.data
        setTransactions([...transactions, transaction])

    }

    return (
        <ReactContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </ReactContext.Provider>
    )
}

export default ReactStateProvider;

export function useTransactions() {
    const context = useContext(ReactContext)

    return context;
}