import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import styled from 'styled-components';
import { HotelContext } from '../../contexts/HotelContext';
import HotelOption from './HotelOption';

export default function HotelOptions() {
  const { hotels } = useContext(HotelContext);

  return (
    <Options>
      <Subtitle>Primeiro, escolha seu hotel</Subtitle>
      <div>
        {hotels?.map(hotel => <HotelOption hotel={hotel} />)}
      </div>
    </Options>
  );
}

const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 5px;
  font-family: 'Roboto', sans-serif;
  margin: 10px 0;

  & > div {
    display: flex;
    column-gap: 25px;
  }
`;

const Subtitle = styled(Typography)`
  color: #8e8e8e;
  font-size: 20px !important;
  font-family: 'Roboto', sans-serif;

`;
