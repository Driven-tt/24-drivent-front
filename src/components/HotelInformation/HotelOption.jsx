import { useContext } from 'react';
import styled from 'styled-components';
import { HotelContext } from '../../contexts/HotelContext';

export default function HotelOption({ hotel }) {
  const { selectHotel, selectedHotel } = useContext(HotelContext);
  const isActive = selectedHotel === hotel.id;

  return (
    <Hotel active={isActive} onClick={() => selectHotel(hotel.id)}>
      <img src={hotel?.image} alt={hotel?.title} />
      <h1>{hotel?.title}</h1>
      <div>
        <h2>Tipos de acomodacao:</h2>
        <span>{hotel?.accommodationTypes}</span>
      </div>
      <div>
        <h2>Vagas disponiveis: </h2>
        <span>{hotel?.emptyRooms}</span>
      </div>
    </Hotel>
  );
}

const Hotel = styled.div`
    width: 196px;
    height: 264px;
    background-color: ${props => props.active ? '#FFEED2' : '#f1f1f1'};
    border-radius: 10px;
    padding: 16px 0;
    cursor: pointer;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 14px;

    font-family: 'Roboto', sans-serif;
    

    img, div, h1 {
        width: 168px;
    }

    img {
        height: 109px;
        background-color: blue;
        border-radius: 5px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        row-gap: 2px;
    }

    h1 {
        font-size: 20px;
    }

    h2, span {
        font-size: 12px;
    }

    h2 {
        font-weight: 700;
    }
`;
