import {useContext} from 'react';
import {ContextTournaments} from '../../context/TorneosContext';



const torneos = [
    {
      id:1,
      img:require('../home/torneos/img/3ccafd4c-aec9-4ba9-a906-8d66e41d488f.jpg'),
      title:'Torneo 1',
      sede:'Sede 1',
      fecha:'01-01-2022',
      status:'Activo',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
    },
    {
      id:2,
      img:require('../home/torneos/img/9b0e6844-da68-4697-9f3d-04db366d75cf.jpg'),
      title:'Torneo 2',
      sede:'Sede 2',
      fecha:'01-01-2022',
      status:'Finalizado',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
    },
    {
      id:3,
      img:require('../home/torneos/img/4f45698d-274a-425c-83c3-9cbb15a315e8.jpg'),
      title:'Torneo 3',
      sede:'Sede 3',
      fecha:'01-01-2022',
      status:'Finalizado',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
  
    }
  ]

export const ListaTorneos = ()=>{

    const { setScreen,setIdTournament } = useContext(ContextTournaments);

    const mostrarDetalleTorneo = (id)=>{
        setScreen(1);//Mostramos la pantalla de detalle
        setIdTournament(id);// indicamos cual id debe mostrar
    }

    return(
        <>
            <div className="row  mb-5 d-flex align-items-center">
                <div className="col-md-6 order-md-1 order-2 position-relative">
                    <input type="text" className="form-control"/>
                    <span className="position-absolute" style={{top:-25,left:25,fontSize:18,color:'gray'}}>Buscar torneo por nombre</span>
                </div>
                <div className="col-md-6 order-md-2 order-1 d-flex justify-content-end mb-3">
                    <div style={{fontSize:25}}>Total de torneos:</div>
                    <div className="indicator-number">
                        3
                    </div>
                </div>
            </div>

            <div className="row">
                {
                torneos.map(view =>
                    (
                    <div className="col-lg-4 col-md-6 col-12 wow bounceInUp" data-wow-duration="1.4s" key={view.id}>
                        <div className="card mb-4 custome-card">
                            <img src={view.img} className="card-img-top" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title text-truncate text-center">{view.title}</h5>
                                <p><b>Sede: </b>{view.sede}</p>
                                <p><b>Fecha: </b>{view.fecha}</p>
                                <p>
                                    <b>Estatus: </b>
                                    {view.status} 
                                    <label className={` ${view.status === 'Activo' ? 'circle-indicator-on' : 'circle-indicator-off'} `}></label>
                                </p>
                                <hr />
                                <div className="text-center mt-3"><button type="button" className="btn btn-danger" onClick={()=>mostrarDetalleTorneo(view.id)}>Ver más</button></div>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </>
    )
}