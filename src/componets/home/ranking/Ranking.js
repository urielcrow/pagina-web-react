import { memo } from 'react';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import './ranking.css';

const jugadores = [
  {
    id:1,
    posicion:1,
    nombre: 'Maximiliano Arce',
    pts:'10830',
    img:require('./img/no-image.jpg')
  },
  {
    id:2,
    posicion:2,
    nombre: 'Franco Dai Bianco',
    pts:'10830',
    img:require('./img/no-image.jpg')
  },
  {
    id:3,
    posicion:3,
    nombre: 'Adrian Allemandi',
    pts:'10830',
    img:require('./img/no-image.jpg')
  },
  {
    id:4,
    posicion:4,
    nombre: 'Leonel Aguirre',
    pts:'10830',
    img:require('./img/no-image.jpg')
  },
  {
    id:5,
    posicion:5,
    nombre: 'Gonzalo G. Alfonso',
    pts:'10830',
    img:require('./img/no-image.jpg')
  },
  {
    id:6,
    posicion:6,
    nombre: 'Andres Britos',
    pts:'10830',
    img:require('./img/no-image.jpg')
  },
  {
    id:7,
    posicion:7,
    nombre: 'Federico Chiostri',
    pts:'10830',
    img:require('./img/no-image.jpg')
  },
  {
    id:8,
    posicion:8,
    nombre: 'Pablo Barrera',
    pts:'10830',
    img:require('./img/no-image.jpg')
  },
  {
    id:9,
    posicion:9,
    nombre: 'Diego Ramos',
    pts:'10830',
    img:require('./img/no-image.jpg')
  },
  {
    id:10,
    posicion:10,
    nombre: 'Julio Julianoti',
    pts:'10830',
    img:require('./img/no-image.jpg')
  },
]

export const Ranking = memo(() => {

    return (
        <section id="ranking">
        <div className="container">

          <div className="section-header">
            <h3>Ranking</h3>
            <p style={{marginTop:-30,marginBottom:-10}}><button type="button" className="btn btn-outline-dark">Ver ranking completo</button></p>

           
          </div>

          
           <div className="row">

              <div className="col-12 text-center category-title" style={{marginBottom:20}}>
                <div className="d-flex justify-content-center">
                  <h2>Top Ten (Categoría A)</h2>
                </div>
              </div>

              <hr style={{marginBottom:50}}/>

              {
                jugadores.map( (jugador,index) => (

                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center wow bounceInUp" data-wow-duration="1.4s" style={{marginBottom:50}} key={jugador.id}>
                    <div className="item-user">
                      <div className="container-img position-absolute">
                        <img alt="avatar" src={jugador.img} />
                      </div>
                      <div className="container-category">
                        <h3>A</h3>
                      </div>
                      <div className="container-position position-absolute">
                        <span>{jugador.posicion}</span>
                      </div>
                      <div className="data">
                        <div className="text-uppercase text-center text-truncate" style={{marginBottom:10,height:25}}>{jugador.nombre}</div>
                        <div className="container-pts">pts: <span className="pts ms-2">{jugador.pts}</span></div>
                      </div>
                    </div>
                  </div>

                ))
              }
             
            </div>


            <div className="row">

              <div className="col-12 text-center category-title" style={{marginBottom:20}}>
                <div className="d-flex justify-content-center">
                  <h2>Top Ten (Categoría B)</h2>
                </div>
              </div>

               <hr style={{marginBottom:50}}/>

              {
                jugadores.map( (jugador,index) => (

                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center wow bounceInUp" data-wow-duration="1.4s" style={{marginBottom:50}} key={jugador.id}>
                    <div className="item-user">
                      <div className="container-img position-absolute">
                        <img alt="avatar" src={jugador.img} />
                      </div>
                      <div className="container-category">
                        <h3>B</h3>
                      </div>
                      <div className="container-position position-absolute">
                        <span>{jugador.posicion}</span>
                      </div>
                      <div className="data">
                        <div className="text-uppercase text-center text-truncate" style={{marginBottom:10,height:25}}>{jugador.nombre}</div>
                        <div className="container-pts">pts: <span className="pts ms-2">{jugador.pts}</span></div>
                      </div>
                    </div>
                  </div>

                ))
              }

            </div>

            <div className="row">

              <div className="col-12 text-center category-title" style={{marginBottom:20}}>
                <div className="d-flex justify-content-center">
                  <h2>Top Ten (Categoría C)</h2>
                </div>
              </div>

              <hr style={{marginBottom:50}}/>

              {
                jugadores.map( (jugador,index) => (

                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center wow bounceInUp" data-wow-duration="1.4s" style={{marginBottom:50}} key={jugador.id}>
                    <div className="item-user">
                      <div className="container-img position-absolute">
                        <img alt="avatar" src={jugador.img} />
                      </div>
                      <div className="container-category">
                        <h3>C</h3>
                      </div>
                      <div className="container-position position-absolute">
                        <span>{jugador.posicion}</span>
                      </div>
                      <div className="data">
                        <div className="text-uppercase text-center text-truncate" style={{marginBottom:10,height:25}}>{jugador.nombre}</div>
                        <div className="container-pts">pts: <span className="pts ms-2">{jugador.pts}</span></div>
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

