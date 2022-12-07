import {useEffect,useState,useRef} from 'react';

const BD = [
    {
        id:1,
        img:require('../home/torneos/img/5dd98495-ffee-4ccf-a0a9-5327e87791a9.jpg'),
        title:'Torneo 1',
        sede:'Sede 1',
        fecha:'01-01-2022',
        status:'Activo',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        inscritos: [
            {
              id:1,
              posicion:1,
              nombre: 'Maximiliano Arce',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:2,
              posicion:2,
              nombre: 'Franco Dai Bianco',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:3,
              posicion:3,
              nombre: 'Adrian Allemandi',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:4,
              posicion:4,
              nombre: 'Leonel Aguirre',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:5,
              posicion:5,
              nombre: 'Gonzalo G. Alfonso',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:6,
              posicion:6,
              nombre: 'Andres Britos',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:7,
              posicion:7,
              nombre: 'Federico Chiostri',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:8,
              posicion:8,
              nombre: 'Pablo Barrera',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:9,
              posicion:9,
              nombre: 'Diego Ramos',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:10,
              posicion:10,
              nombre: 'Julio Julianoti',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
        ]
      },
      {
        id:2,
        img:require('../home/torneos/img/9dd4bb73-0e1c-424a-acf5-b0831b70bc34.jpg'),
        title:'Torneo 2',
        sede:'Sede 2',
        fecha:'01-01-2022',
        status:'Finalizado',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        inscritos: [
            {
              id:1,
              posicion:1,
              nombre: 'Maximiliano Arce',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:2,
              posicion:2,
              nombre: 'Franco Dai Bianco',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:3,
              posicion:3,
              nombre: 'Adrian Allemandi',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:4,
              posicion:4,
              nombre: 'Leonel Aguirre',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:5,
              posicion:5,
              nombre: 'Gonzalo G. Alfonso',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:6,
              posicion:6,
              nombre: 'Andres Britos',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:7,
              posicion:7,
              nombre: 'Federico Chiostri',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            }
        ]
      },
      {
        id:3,
        img:require('../home/torneos/img/e8db6703-9000-4ee8-9db9-5d30d5146539.jpg'),
        title:'Torneo 3',
        sede:'Sede 3',
        fecha:'01-01-2022',
        status:'Finalizado',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        inscritos: [
            {
              id:1,
              posicion:1,
              nombre: 'Maximiliano Arce',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:2,
              posicion:2,
              nombre: 'Franco Dai Bianco',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:3,
              posicion:3,
              nombre: 'Adrian Allemandi',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            },
            {
              id:4,
              posicion:4,
              nombre: 'Leonel Aguirre',
              pts:'10830',
              img:require('../home/ranking/img/no-image.jpg')
            }
        ]
      }
]


export const TorneosHook = (idTournament)=>{

    const [data,setData] = useState({
        load:true,
        torneos:[]
    });

    const obtenerTorneos = ()=>{
        console.log('petición get');
        return new Promise ((resolve,reject)=>{
            setTimeout(() => {
                resolve(BD);
            },800);
        })
    }

    useEffect(() => {
        
        obtenerTorneos()
        .then(
            resp => setData({
                load:false,
                torneos:resp[idTournament - 1]
            })
        )

    }, [idTournament]);

    return{
        data
    }
    
}