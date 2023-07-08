import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
`
const LogoImg = styled.img`
    margin-right: 10px;
`
const Negrito = styled.span`
    font-weight: bold;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt='logo'></LogoImg>
            <p><Negrito>Alura</Negrito>Books</p>
        </LogoContainer>
    );
}

export default Logo;