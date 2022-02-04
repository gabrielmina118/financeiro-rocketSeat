import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenModalTransaction: () => void;
}

export function Header({onOpenModalTransaction}: HeaderProps) {

    return (
        <Container>
            
            <Content>
                <img src={logoImg} alt="financeiro logo" />
                <button type="button" onClick={onOpenModalTransaction}>
                    Nova  transação
                </button>

            </Content>
        </Container>
    )
}