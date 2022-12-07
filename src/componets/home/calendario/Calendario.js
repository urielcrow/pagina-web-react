import { memo } from 'react';

import './calendario.css';

const fechas = [
  {
    id:1,
    fecha:'7 al 14 SEP',
    club:'Padel Now',
    logo:require('./img/padelNow.jpg')
  },
  {
    id:8,
    fecha:'7 al 14 SEP',
    club:'Providencia Padel Club',
     logo:require('./img/providencia.jpg')
  },
  {
    id:2,
    fecha:'7 al 14 SEP',
    club:'Best Padel',
     logo:require('./img/bestPadel.jpg')
  },
  {
    id:3,
    fecha:'7 al 14 SEP',
    club:'Carbono Padel Club',
     logo:require('./img/carbono.jpg')
  },
  {
    id:4,
    fecha:'7 al 14 SEP',
    club:'Green Padel',
     logo:require('./img/greenPadel.jpg')
  },
  {
    id:5,
    fecha:'7 al 14 SEP',
    club:'Padel Park',
     logo:require('./img/padelPark.jpg')
  },
  {
    id:6,
    fecha:'7 al 14 SEP',
    club:'Padel Sport',
     logo:require('./img/padelSport.jpg')
  },
  {
    id:7,
    fecha:'7 al 14 SEP',
    club:'Cañadas Padel',
     logo:require('./img/canadasPadel.jpg')
  },
 
]

export const Calendario = memo(() => {

    return (
      <>
        <section id="calendario">
          <div className="container">
    
            <header className="section-header">
              <h3>Calendario</h3>
            </header>
           
           
            <div className="row">
              {
                fechas.map( fecha => (
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center wow bounceInUp" data-wow-duration="1.4s" key={fecha.id}>
                    <div className="item-calendar">
                      <div className="data">
                        <span className="fecha">{fecha.fecha}</span>
                        <span className="club">{fecha.club}</span>
                      </div>
                      <div className="logo-club">
                        <img src={fecha.logo} alt="logo" />
                      </div>
                    </div>
                  </div>
                ))
              }
             
            </div>
          
          

          </div>
        </section>
      </>
    )
})

