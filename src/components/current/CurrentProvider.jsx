import React, {useContext, useState} from 'react';

const CurrentContext = React.createContext('');

export const useCurrent = () => {
    return useContext(CurrentContext);
}

export const CurrentProvider = ({ children }) => {
    const [currentEvent, setCurrentEvent] = useState("");
    const [currentGuide, setCurrentGuide] = useState("");

    const [order, setOrder] = useState({});
    const [isTourist, setIsTourist] = useState(false);

    const updateIsTourist = (flag) => {
        setIsTourist(() => flag);
    }

    const updateOrder = (order) => {
        setOrder(() => order)
    }

    const updateEvent = (event) => {
        setCurrentEvent(() => event);
    }

    const updateGuide = (guide) => {
        setCurrentGuide(() => guide);
    }
  return (
      <CurrentContext.Provider value={{
          event: currentEvent,
          guide: currentGuide,
          order: order,
          isTourist: isTourist,
          updateEvent,
          updateGuide,
          updateIsTourist,
          updateOrder
      }}>
          {children}
      </CurrentContext.Provider>
  )
}
