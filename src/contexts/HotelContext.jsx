import { createContext, useState } from 'react';

export const HotelContext = createContext();

export function HotelProvider({ children }) {
  const hotelsMock = [
    {
      id: 1,
      image: 'https://...',
      title: 'Hotel titulo',
      accommodationTypes: 'Single, Double e Triple',
      emptyRooms: 25
    },
    {
      id: 2,
      image: 'https://...',
      title: 'Hotel titulo',
      accommodationTypes: 'Single, Double e Triple',
      emptyRooms: 25
    },
    {
      id: 3,
      image: 'https://...',
      title: 'Hotel titulo',
      accommodationTypes: 'Single, Double e Triple',
      emptyRooms: 25
    }
  ];
  const [ hotels, setHotels ] = useState(hotelsMock);
  const [ selectedHotel, setSelectedHotel ] = useState(null); 

  function selectHotel(id) {
    setSelectedHotel(id);
  }

  return (
    <HotelContext.Provider 
      value={{
        hotels,
        selectedHotel,
        selectHotel
      }}>
      { children }
    </HotelContext.Provider>
  );
}
