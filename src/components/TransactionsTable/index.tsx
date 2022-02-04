import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";



export function TransactionsTable() {
    
    const data = useTransactions()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {data.transactions.map((trans) => { 
                        return (
                            <tr key={trans.id}>
                                <td>{trans.title}</td>
                                <td className={trans.type}>{new Intl.NumberFormat('pt-BR',{
                                    style:'currency',
                                    currency: 'BRL'
                                }).format(trans.amount)}</td>
                                <td>{trans.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(trans.createAt))}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}