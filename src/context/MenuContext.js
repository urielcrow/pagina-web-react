import {createContext,useState} from 'react';

export const ContextMenu = createContext();

export const MenuProvider = ({children})=>{
    
    const [active,setActive] = useState({});
   
    
    return (
        <ContextMenu.Provider value={{
            active,setActive
        }}>
            {children}
        </ContextMenu.Provider>
    )
}

