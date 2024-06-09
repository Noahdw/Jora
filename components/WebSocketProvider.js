import React, { createContext, useContext, useEffect, useState } from 'react';

export const WebSocketContext = createContext(null);

export function useWebSocket() {
  return useContext(WebSocketContext);
}

export const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize WebSocket connection
    const ws = new WebSocket('ws://localhost:8080/socket');
    setSocket(ws);
    
    ws.onmessage = (event) => {
        // Assume messages are in a structured format, e.g., {type: 'eventType', data: {}}
        try {
          const message = JSON.parse(event.data);
          const newEvent = new CustomEvent(message.type, { detail: message });
          window.dispatchEvent(newEvent);
        } catch (error) {
          console.log(error)
        }

      };

    // Cleanup on unmount
    return () => {
      ws.close();
    };
  }, []);

  const subscribe = (eventType, handler) => {
    window.addEventListener(eventType, handler);
  };

  const unsubscribe = (eventType, handler) => {
    window.removeEventListener(eventType, handler);
  };

  return (
    <WebSocketContext.Provider value={{socket, subscribe, unsubscribe}}>
      {children}
    </WebSocketContext.Provider>
  );
};