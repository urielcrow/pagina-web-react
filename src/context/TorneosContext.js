import {createContext,useState} from 'react';

export const ContextTournaments = createContext();

export const TournamentsProvider = ({children})=>{
    
    //indicamos la pantalla a amostrar 
    //----> 0 listamos los torneos 
    //----> 1 listamos el detalle de un torneo
    const [screen,setScreen] = useState(0);

    //Indica el id del torneo seleccionado
    const [idTournament,setIdTournament] = useState(0);
    
    return (
        <ContextTournaments.Provider value={{
            screen,setScreen,
            idTournament,setIdTournament
        }}>
            {children}
        </ContextTournaments.Provider>
    )
}

