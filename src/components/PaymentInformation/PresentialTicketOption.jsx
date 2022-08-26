import { useContext } from 'react';
import styled from 'styled-components';
import { PaymentContext } from '../../contexts/PaymentContext';

export default function PresentialTicketOption({ id, title, price }) {
  const { accommodationModality, selectAccommodationModality } = useContext(PaymentContext);

  const selected = accommodationModality.type === id; 
  const bgColor = selected ? '#FFEED2' : '#0000';

  return (
    <AccomodationModality bgColor={bgColor} onClick={() => selectAccommodationModality({ type: id, price: price })}>
      <span>{title}</span>
      <span>+ R$ {price}</span>
    </AccomodationModality>
  );
}

const AccomodationModality = styled.div`
    width: 145px;
    height: 145px;
    border-radius: 20px;
    border: 1px solid #CECECE;
    background-color: ${props => props.bgColor};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;

    &:hover {
        cursor: pointer;
    }

    & > span:first-child {
        font-size: 16px;
        color: #454545;
    }

    & > span:last-child {
        font-size: 14px;
        color: #898989;
    }
`;
