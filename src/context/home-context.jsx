import React, { createContext, useContext, useState } from 'react';

// 1. Contextni yarating
const MyContext = createContext();

// 2. Provider komponenti
const MyProvider = ({ children }) => {
    const [value, setValue] = useState("Dastlabki qiymat");

    return (
        <MyContext.Provider value={{
            value, setValue
        }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyProvider };


