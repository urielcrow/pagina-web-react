import React from 'react';
import './buttonFloat.css';


export const ButtonFloat = ( {hight=700}) =>{

    const [scrollPosition, setScrollPosition] = React.useState(0);
    // const [widthScreen, setWidthScreen] = React.useState(0);

    //Para definir si subiremos la pantalla en celular o pc
    // const timer = React.useRef();
    // const [y,setY] = React.useState(10);

   
    const goTop = ()=>{
        //if(widthScreen < 1280){//para celular
            window.scrollTo({top: 0, behavior: 'smooth'});
        // }
        // else{//para pc
        //     if(window.pageYOffset === 0){
        //         clearTimeout(timer.current);
        //         return;
        //     }
    
        //     if(timer.current)
        //         clearTimeout(timer.current);
    
        //     timer.current = setInterval(()=>{
        //         const newPosition = window.pageYOffset-150;
        //         setY(newPosition)
        //         window.scrollTo({top: newPosition, behavior: 'smooth'});
        //     },20)
        // }
    }

    // React.useEffect(()=>{
    //     timer.current &&
    //     goTop();
    // },[y,goTop])


    React.useEffect(() => {//Guardamos la posición del scroll
        function updatePosition() {
            setScrollPosition(window.pageYOffset);
        }
        window.addEventListener('scroll', updatePosition);
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);


    // React.useEffect(()=>{//Guardamos la resolución de la pantalla
    //     const mifuncion = ()=>{
    //         setWidthScreen( window.innerWidth )
    //     }
    //     window.addEventListener('resize',mifuncion);
    //     return () => window.removeEventListener('resize',mifuncion);
    // },[]);

    return (
        scrollPosition > hight 
        ? 
            <button type="button" className="btn buttonFloat" onClick={goTop}><i className="fas fa-arrow-up fa-2x" title="Arriba"></i></button> 
        :
            <></>
    )
}
