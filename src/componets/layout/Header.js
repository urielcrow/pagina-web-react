import React, {useContext,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link,useLocation } from "react-router-dom";
import {customeContext} from '../../context/context';
import {ContextMenu} from '../../context/MenuContext';
import { menus} from '../../routes/tipos/menus';

const MenuBurger = ({sideBar,title})=>{
    return(
        <div className="row align-items-center">
            <div className="col-6 clearfix">
                <span style={{fontSize:28,color:'#FFF'}}>{title}</span>
            </div>
            <div className="col-6 d-flex justify-content-end">
                <div className="nav-btn pull-left" onClick={()=>sideBar(state => !state)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

const MenuTop = ({scrollPosition})=>{

    const {/*name,image,*/access} = useSelector( store => store.auth );
    const {active,setActive} = useContext(ContextMenu);

    const {pathname:location} = useLocation();

    // const [active,setActive] = React.useState({
    //     [location] : 'menu-active'
    // });

    const changeActive = (val)=>{
        setActive({
            [val]:'menu-active'
        });
    }

    useEffect(() => {
        setActive({
            [location] :'menu-active'
        });
    },[]);

    return(
        <div className={`header ${scrollPosition > 100 && 'header-scrolled'} d-flex justify-content-between align-items-center`}>
            <div className="logo">
                <div className="logo-header-main d-flex">
                    <img 
                        src={process.env.PUBLIC_URL + '/assets/img/logo/logo.png'} 
                        alt="logo"
                    />
                    <div style={{marginLeft:10,textAlign:'center',marginTop:10}}>
                        <span style={{color:'#FFF'}}>CIRCUITO</span>
                        <span style={{color:'#F20000'}}>TOTAL PADEL</span>
                        <span style={{color:'#FFF'}}>JALISCO</span>
                    </div>
                </div>
            </div>
            <nav className="nav-menu-container">
                <ul className="nav-menu">

                    {
                         menus(access).map(option =>(
                            <li className={active[`${option.to}`]} key={option.name}>
                                <Link
                                    className="link-principal"
                                    to={`${option.to}`}
                                    onClick={()=>changeActive(`${option.to}`)}
                                >
                                    {option.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export const Header = ({setShowHideSideBar,widthScreen,scrollPosition}) => {

    const {context} = useContext(customeContext);

    return (
        <>
            <div className={`${ widthScreen <= 768 ? 'header-area' :'header-area2' }`} >
                {
                    widthScreen <= 768 
                    ?
                    <MenuBurger sideBar={setShowHideSideBar} title={context.titlePage}/>
                    :
                    <MenuTop scrollPosition={scrollPosition}/>
                }
            </div>    
        </>
    )
}
