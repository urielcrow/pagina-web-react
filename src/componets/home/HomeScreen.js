import { useContext , memo, useEffect} from 'react';
import WOW from 'wowjs';
import {customeContext} from '../../context/context';
import {SwiperMain} from './banner/Swiper';
import {Calendario} from './calendario/Calendario';
import {Ranking} from './ranking/Ranking';
import {Torneos} from './torneos/Torneos';
import {Noticias} from './noticias/Noticias';
import {Galerias} from './galerias/Galerias';
import {Afiliados} from './afiliados/Afiliados';
import {ButtonFloat} from '../utils/buttonFloat/ButtonFloatComponent';


const HomeScreen = memo(() => {

   
    const { setContext } = useContext(customeContext);

    useEffect(() => {
        setContext( context => (
            {   ...context,
                titlePage : 'Inicio'
            })
        );
    },[setContext]);

     useEffect(()=>{
        new WOW.WOW({
            live: false
        }).init();
    },[]);


    return (
        <>
            <SwiperMain />
            <Afiliados />
            <Calendario />
            <Ranking />
            <Torneos />
            <Noticias />
            <Galerias />
            <ButtonFloat hight={300}/>
        </>
    )
})

export default HomeScreen;
