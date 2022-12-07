import {useContext,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {ContextTournaments} from '../../context/TorneosContext';
import {TorneosHook} from './TorneosHook';
import {Load} from '../utils/load/Load';

export const DetalleTorneo = ()=>{

    const navigate = useNavigate();

    const { setScreen,idTournament} = useContext(ContextTournaments);
    const {data} = TorneosHook(idTournament);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    },[]);

    console.log('pantalla de detalle');


    const regresar = ()=>{
        setScreen(0);
        //navigate(-1);
    }

    return(
        <>
            <div style={{marginTop:-40}}>
                <button style={{fontSize:20}} type="button" className="btn btn-outline-dark" onClick={regresar}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
            </div>

            <h3 className="text-center mt-3 mb-3 text-uppercase" style={{marginTop:'-30px !important'}}>{data.torneos.title}</h3>

            {
                data.load ?

                <Load /> :

                <TarjetaTorneo data={data.torneos}/>
                
            }

        </>
    )
}

const TarjetaTorneo = ({data})=>{
    return(
        <div className="row">
            <div className="col-md-6 col-12 mb-3">
                <img src={data.img} alt="img-torneo"/>
            </div>
            <div className="col-md-6 col-12">
                <div className="torneo-titulo"><i className="fa fa-map-marker" aria-hidden="true"></i> SEDE</div>
                <div className="torneo-detalle">{data.sede}</div>
                <div className="torneo-titulo"><i className="fa fa-calendar" aria-hidden="true"></i> FECHAS</div>
                <div className="torneo-detalle"><b>Inicio: </b>{data.fecha}</div>
                <div className="torneo-detalle"><b>Fin: </b>{data.fecha}</div>
                <div className="torneo-titulo"><i className="fa fa-circle" aria-hidden="true"></i> ESTATUS</div>
                <div className="torneo-detalle">
                    {data.status}
                    <label className={` ${data.status === 'Activo' ? 'circle-indicator-on' : 'circle-indicator-off'} `}></label>
                </div>
                <div className="torneo-titulo"><i className="fa fa-trophy" aria-hidden="true"></i> PREMIOS</div>
                <div className="torneo-detalle">$ 25,000.00</div>
                <div className="torneo-titulo"><i className="fa fa-file-o" aria-hidden="true"></i> DESCRIPCIÓN</div>
                <div className="torneo-detalle">{data.text}</div>
                <div className="torneo-titulo"><i className="fa fa-calendar-times-o" aria-hidden="true"></i> FECHA LÍMITE DE INSCRIPCIÓN</div>
                <div className="torneo-detalle">20-12-2022</div>
                
                <div className="text-center mb-5">
                   {
                        data.status === 'Activo' && 
                        <>
                            <hr />
                            <button type="button" className="btn btn-lg btn-danger btn-inscription">Inscribirme <i className="fa fa-check-square-o" aria-hidden="true"></i></button>
                        </>
                   } 
                </div>
               
            </div>
            <div className="col-12 mb-3">
                <div className="torneo-titulo">
                    <i className="fa fa-list-ol" aria-hidden="true"></i> INSCRITOS
                </div>
                <div className="text-center">
                    <img src={require('./contador.png')} alt="contador" style={{width:120}}/>
                </div>
                <div className="row mt-5">
                    {
                        data.inscritos.map( (jugador,index) => (

                            <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center wow bounceInUp" data-wow-duration="1.4s" style={{marginBottom:50}} key={jugador.id}>
                                <div className="item-user">

                                    <div className="container-img position-absolute">
                                        <img alt="avatar" src={jugador.img} />
                                    </div>
                                   
                                    <div className="data">
                                        <div className="text-uppercase text-center text-truncate" style={{marginBottom:10,height:25}}>{jugador.nombre}</div>
                                    </div>

                                </div>
                            </div>

                        ))
                    }
                </div>
                <div className="text-center">

                    {
                       data.status === 'Activo' && 
                        <>
                            <hr />
                            <button type="button" className="btn btn-lg btn-danger btn-inscription">Inscribirme <i className="fa fa-check-square-o" aria-hidden="true"></i></button>
                        </>
                    } 
                   
                </div>
            </div>
        </div>
    )
}