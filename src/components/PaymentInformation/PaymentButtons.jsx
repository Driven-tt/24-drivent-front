import { useContext } from 'react';
import styled from 'styled-components';
import { PaymentContext } from '../../contexts/PaymentContext';

export default function PaymentButton() {
  const { setPaymentData } = useContext(PaymentContext);
  return (
    <Wrapper>
      <Button onClick={() => setPaymentData(null)}>FINALIZAR PAGAMENTO </Button>
      <Button onClick={() => setPaymentData(null)}>VOLTAR </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 162px;
  height: 37px;
  margin-top: 10px;
  margin-right: 20px;
  background-color: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  color: #000;

  &:hover {
    cursor: pointer;
  }
`;
