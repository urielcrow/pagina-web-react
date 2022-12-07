import {types} from '../../types/types';

//Aquí añadimos cada opcion existente para crear el estado inicial y saber que opcion mostrar como seleccionada
export const stateInit = {
    '/inicio' : '',
    // '/usuarios' : '',
    // '/acount' : ''//por defecto
}

//Los módulos que todos los perfiles tienen
const compartidos = [
    {
        to: "/inicio",
        name: "Inicio",
        icon: "fa fa-home fa-2x fa-fw"
    },
    {
        to: "/calendario",
        name: "Calendario",
        icon: "fa fa-calendar fa-2x fa-fw"
    },
    {
        to: "/ranking",
        name: "Ranking",
        icon: "fa fa-sort fa-2x fa-fw"
    },
    {
        to: "/torneos",
        name: "Torneos",
        icon: "fa fa-trophy fa-2x fa-fw"
    },
    {
        to: "/noticias",
        name: "Noticias",
        icon: "fa fa-newspaper-o fa-2x fa-fw"
    },
    {
        to: "/galerias",
        name: "Galerias",
        icon: "fa fa-picture-o fa-2x fa-fw"
    },
    {
        to: "/afiliados",
        name: "Afiliados",
        icon: "fa fa-address-card-o fa-2x fa-fw"
    },
    {
        to: "/registrate",
        name: "Registrate",
        icon: "fa fa-sign-in fa-2x fa-fw"
    }
   
];

//Modulos que solo el usuario estandar tiene
const estandar = [];

//Modulos que solo el usuario administrador tiene
const administrador = [];

export const menus = (access)=>{
    switch (access) {
        case types.administrador:
            return [...compartidos,...administrador,];
        case types.estandar:
            return [...compartidos,...estandar];
        default:
            return [...compartidos,...estandar];
    }
}