import {useContext,useEffect, memo} from 'react';
import {customeContext} from '../../context/context';
import {ContextTournaments} from '../../context/TorneosContext';
import {ListaTorneos} from './ListaTorneos';
import {DetalleTorneo} from './DetalleTorneo';
import '../home/torneos/torneos.css';
import './torneos.css';


const TorneosScreen = memo(() => {

    const {setContext} = useContext(customeContext);
    const {screen} = useContext(ContextTournaments);
   

    useEffect(() => {
        setContext( context => (
            {   ...context,
                titlePage : 'Torneos'
            })
        );
    },[setContext]);

   
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    },[]);

    return (
        <section id="torneos">
            <div className="container">

            <div className="section-header">
                <h3>Torneos</h3>
            </div>

            {
                screen === 1 
                ?
                <DetalleTorneo /> 
                :
                <ListaTorneos />
            }
            
            </div>
        </section>
    )
})
export default TorneosScreen;
