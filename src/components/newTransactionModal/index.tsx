import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, RadioBoxTransaction, TransactionTypeContainer } from './style';
import closeImage from '../../assets/vector.svg'
import entradaImg from '../../assets/entradas.svg'
import saindaImg from '../../assets/saidas.svg'
import { useTransactions } from '../../hooks/useTransactions';

// acessibilidade
Modal.setAppElement('#root')

interface TransactionModalProps {
    isNewTransctionModal: boolean;
    handleCloseModalTransaction: () => void;
}

export function TransactionModal({ isNewTransctionModal, handleCloseModalTransaction }: TransactionModalProps) {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('')
    const { createTransaction } = useTransactions()

    const handleNewTransactionForm = async (e: FormEvent) => {
        e.preventDefault();


        await createTransaction({
            title,
            type,
            category,
            amount
        })
        setTitle('')
        setAmount(0)
        setType('deposit')
        setCategory('')

        handleCloseModalTransaction();
    }

    return (
        <Modal
            isOpen={isNewTransctionModal}
            onRequestClose={handleCloseModalTransaction}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                onClick={handleCloseModalTransaction}
                className='react-modal-close'
            >
                <img src={closeImage} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleNewTransactionForm}>
                <h2>Cadastrar Transação </h2>
                <input
                    placeholder='titulo'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type={"number"}
                    placeholder='valor'
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBoxTransaction
                        type="button"
                        onClick={() => { setType('deposit'); }}

                        isActive={type === 'deposit'}
                        activeColor="green"

                    >
                        <img src={entradaImg} alt="Entrada " />
                        <span>Entrada</span>
                    </RadioBoxTransaction>
                    <RadioBoxTransaction
                        type="button"
                        onClick={() => { setType('withDraw'); }}
                        isActive={type === 'withDraw'}
                        activeColor="red"
                    >
                        <img src={saindaImg} alt="Entrada " />
                        <span>Saída</span>
                    </RadioBoxTransaction>
                </TransactionTypeContainer>

                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />
                <button
                    type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}



