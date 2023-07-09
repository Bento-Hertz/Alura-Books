import styled from 'styled-components';
import Pesquisa from '../Pesquisa';
import UltimosLancamentos from '../UltimosLancamentos';

const BodyContainer = styled.body`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    display: grid;
    grid-template-rows: 1fr auto;
`

function Body() {
    return (
        <BodyContainer>
            <Pesquisa />
            <UltimosLancamentos />
        </BodyContainer>
    );
}

export default Body;