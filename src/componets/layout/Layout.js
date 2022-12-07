import React, {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from './SideBar';
import { Header } from './Header';
import { Footer } from './Footer'

import '../../styles/stylesGenerals.css';
import '../../styles/stylesResponsive.css';
import '../../styles/typography.css';
import '../../styles/default-css.css';
import '../../styles/styles-3998.css';

export const Layout = () => {

    const [showHideSideBar,setShowHideSideBar] = useState(true);
    const [widthScreen,setWidthScreen] = useState(window.innerWidth);
    const [scrollPosition, setScrollPosition] = React.useState(0);
   

    useEffect(()=>{

        const mifuncion = ()=>{
            setWidthScreen( window.innerWidth )
            //window.innerWidth <= 1364 ? setShowHideSideBar( true ) : setShowHideSideBar( false );
            window.innerWidth <= 768 && setShowHideSideBar( true );
        }

        window.addEventListener('resize',mifuncion);

        return () => {
            window.removeEventListener('resize',mifuncion);
        }

    },[]);

    React.useEffect(() => {//Guardamos la posición del scroll

        function updatePosition() {
            setScrollPosition(window.pageYOffset);
        }

        window.addEventListener('scroll', updatePosition);
        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);

    }, []);




    return(
        <>
        <div className={`page-container ${ showHideSideBar && 'sbar_collapsed' }`}>
            <SideBar widthScreen={widthScreen} setShowHideSideBar={setShowHideSideBar} showHideSideBar={showHideSideBar} />
            <div className="main-content">
                <Header setShowHideSideBar={setShowHideSideBar} widthScreen={widthScreen} scrollPosition={scrollPosition}/>
            </div>
            <Outlet />
        </div>
        <Footer />
       
        </>
    )
}


