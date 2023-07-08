import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <Icones className='icones'>
          { icones.map( (icone) => (
            <Icone><img className='icone' src={icone} alt='icone'></img></Icone>
          ))}
        </Icones>
    );
}

export default IconesHeader;