import styled from 'styled-components';

export default function TicketOption({ title, price, bgColor }) {
  return (
    <Modality bgColor={bgColor || '#0000'}>
      <span>{title}</span>
      <span>R$ {price}</span>
    </Modality>
  );
}

const Modality = styled.div`
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

    & > span:first-child {
        font-size: 16px;
        color: #454545;
    }

    & > span:last-child {
        font-size: 14px;
        color: #898989;
    }
`;
