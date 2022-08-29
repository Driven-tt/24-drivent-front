import { useState, useRef, useEffect } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import { PaymentContext } from '../../contexts/PaymentContext';
import { Typography } from '@material-ui/core';
import { CardFormWrapper } from './styles/CardFormWrapper';
import { Row } from './styles/Row';

export default function CreditCardForms() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  useEffect(() => {
    ref.current.focus();
  }, []);

  const ref = useRef(null);
  return (
    <>
      <Subtitle variant="h5">Pagamento</Subtitle>
      <CardWrapper>
        <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focus} />
        <CardFormWrapper>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            ref={ref}
          />

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <Row>
            <input
              className="expire"
              type="text"
              name="expiry"
              placeholder="Valid Thru"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />

            <input
              className="cvc"
              type="tel"
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </Row>
        </CardFormWrapper>
      </CardWrapper>
    </>
  );
}
const CardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: 'Roboto', sans-serif;
  margin: 10px 0;
`;

const Subtitle = styled(Typography)`
  color: #8e8e8e;
  font-size: 20px !important;
  font-family: 'Roboto', sans-serif;
`;
