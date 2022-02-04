import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import total from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from "./styles";

export function Summary() {

    const data = useTransactions()

    const sumarry = data.transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;

        } else {
            acc.withDraw += transaction.amount;
            acc.total += transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withDraw: 0,
        total: 0
    })


    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="icone entrada" />
                </header>
                <strong className='deposit'>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(sumarry.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="icone saida" />
                </header>
                <strong className='withDraw'>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(sumarry.withDraw)}</strong>
            </div>
            <div className='hight-background'>
                <header>
                    <p>Total</p>
                    <img src={total} alt="icone total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(sumarry.total)}</strong>
            </div>
        </Container>
    )
}