import { memo } from 'react';

import './afiliados.css';


const afiliados = require('./img/contador.png');

const fechas = [
  {
    id:1,
    fecha:'MAXIMILIANO ARCE',
    club:'20-09-2022',
    logo:require('./img/no-image.jpg')
  },
  {
    id:8,
    fecha:'FRANCO DAI BIANCO',
    club:'20-09-2022',
    logo:require('./img/no-image.jpg')
  },
  {
    id:2,
    fecha:'ADRIAN ALLEMANDI',
    club:'20-09-2022',
    logo:require('./img/no-image.jpg')
  },
  {
    id:3,
    fecha:'LEONEL AGUIRRE',
    club:'20-09-2022',
    logo:require('./img/no-image.jpg')
  },
  {
    id:4,
    fecha:'GONZALO G. ALFONSO',
    club:'20-09-2022',
    logo:require('./img/no-image.jpg')
  },
  {
    id:5,
    fecha:'ANDRES BRITOS',
    club:'20-09-2022',
    logo:require('./img/no-image.jpg')
  },
  {
    id:6,
    fecha:'FEDERICO CHIOSTRI',
    club:'20-09-2022',
    logo:require('./img/no-image.jpg')
  },
  {
    id:7,
    fecha:'PABLO BARRERA',
    club:'20-09-2022',
    logo:require('./img/no-image.jpg')
  },
 
]

export const Afiliados = memo(() => {

    return (
      <>
        <section id="afiliacion">
          <div className="container">
    
            <header className="section-header">
              <h3>Últimos Afiliados</h3>
              <p style={{marginTop:-30}}><button type="button" className="btn btn-outline-dark">Ver lista de afiliados</button></p>
              
              <div  className="wow bounceInUp" data-wow-duration="1.4s" style={{textAlign:'center',marginTop:-20,marginBottom:40}}><img className="contador" src={afiliados} alt="contador" /></div>
              
            </header>
           
           
            <div className="row">
              {
                fechas.map( fecha => (
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center wow bounceInUp" data-wow-duration="1.4s" key={fecha.id}>
                    <div className="item-calendar">
                      <div className="logo-club">
                        <img src={fecha.logo} alt="logo" />
                      </div>
                      <div className="data">
                        <span className="fecha">{fecha.fecha}</span>
                        <span className="label">Fecha de afiliación</span>
                        <span className="club">{fecha.club}</span>
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

