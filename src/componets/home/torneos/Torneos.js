import { memo,useContext,useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import {ContextTournaments} from '../../../context/TorneosContext';
import {ContextMenu} from '../../../context/MenuContext';
import './torneos.css';

const torneos = [
  {
    id:1,
    img:require('./img/3ccafd4c-aec9-4ba9-a906-8d66e41d488f.jpg'),
    title:'Torneo 1',
    sede:'Sede 1',
    fecha:'01-01-2022',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
  },
  {
    id:2,
    img:require('./img/9b0e6844-da68-4697-9f3d-04db366d75cf.jpg'),
    title:'Torneo 2',
    sede:'Sede 2',
    fecha:'01-01-2022',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
  },
  {
    id:3,
    img:require('./img/4f45698d-274a-425c-83c3-9cbb15a315e8.jpg'),
    title:'Torneo 3',
    sede:'Sede 3',
    fecha:'01-01-2022',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'

  }
]

export const Torneos = memo(() => {

  const navigate = useNavigate();
  const { setScreen,setIdTournament } = useContext(ContextTournaments);
  const {setActive} = useContext(ContextMenu);


  const mostrarDetalleTorneo = (id)=>{
      setScreen(1);//Mostramos la pantalla de detalle en el componente de torneos
      setActive({ '/torneos' :'menu-active'});//Indicamos al menú que seleccione torneos
      setIdTournament(id);// indicamos cual id del torneo que debe mostrar
      navigate('/torneos')//Navegamos a la sección torneos
  }

    return (
        <section id="torneos">
        <div className="container">

          <div className="section-header">
            <h3>Torneos</h3>
            <p style={{marginTop:-30,marginBottom:40}}><button type="button" className="btn btn-outline-dark" onClick={()=>navigate('/torneos')}>Ver todos los torneos</button></p>
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
                            <hr />
                            <div className="text-center mt-3"><button type="button" className="btn btn-danger" onClick={()=>mostrarDetalleTorneo(view.id)}>Ver más</button></div>
                        </div>
                    </div>
                  </div>
                ))
            }
          </div>
  
        </div>
      </section>
    
    )
})

