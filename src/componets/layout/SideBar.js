
import React , {useEffect, useRef,useContext} from 'react';
import { useSelector } from 'react-redux';
import { Link,useLocation } from "react-router-dom";
import {ContextMenu} from '../../context/MenuContext';
import { menus,stateInit } from '../../routes/tipos/menus';

export const SideBar = ({ setShowHideSideBar, widthScreen, showHideSideBar }) => {

    const {name,image,access} = useSelector( store => store.auth );
    const refSideBar = useRef(null);
    const refDropDownMenu = useRef(null);

    const {pathname:location} = useLocation();

    const {active,setActive} = useContext(ContextMenu);


    // const [active,setActive] = React.useState({
    //     ...stateInit,
    //     [location] : 'active'
    // });

    // const [ toggleShow , setToggleShow ] = React.useState( false );

    useEffect(()=>{

        const handleClickOutside = (event)=> {
            if (refSideBar.current && !refSideBar.current.contains(event.target) && widthScreen <= 1364 && showHideSideBar === false) 
                setShowHideSideBar(true);

            // if (refDropDownMenu.current && !refDropDownMenu.current.contains(event.target)) 
            //     setToggleShow( false );
        }
    
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    },[widthScreen,showHideSideBar,setShowHideSideBar]);

    useEffect(() => {
        setActive({
            [location] :'menu-active'
        });
    },[])

   
    const changeActive = (val)=>{
        setActive({
            ...stateInit,
            [val]:'menu-active'
        });

        closeSideBarForClickItem();//si es una resolución baja al dar clic en algún módulo cerramos el sideBar
    }

    const closeSideBarForClickItem = ()=>{
        if(widthScreen <= 1364)
            setShowHideSideBar(true);
    }

    return (
        <div ref={refSideBar} className="sidebar-menu">
            <div className="sidebar-header">
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + '/assets/img/logo/logo.png'} alt="logo" style={{maxWidth:90,marginTop:-18}} />
                    <div style={{textAlign:'center',marginTop:10}}>
                        <span style={{color:'#FFF'}}>CIRCUITO</span>
                        <span style={{color:'#F20000',paddingLeft:10}}>TOTAL PADEL</span>
                        <span style={{color:'#FFF',paddingLeft:10}}>JALISCO</span>
                    </div>
                </div>
            </div>
        
            <div className="col clearfix">
               
            </div>
        
            <div className="main-menu">
                <div className="menu-inner">
                    <nav>
                        <ul className="metismenu" id="menu">
                        {
                            menus(access).map(option =>(
                                <li className={active[`${option.to}`]} key={option.name}>
                                    <Link
                                        className="link-principal"
                                        to={`${option.to}`}
                                        onClick={()=>changeActive(`${option.to}`)}
                                    >
                                        <i className={`${option.icon} me-3`}></i> 
                                        {option.name}
                                    </Link>
                                </li>
                            ))
                        }

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}


