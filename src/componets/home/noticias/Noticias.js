import { memo } from 'react';
import './noticias.css';

const views = [
  {
    id:1,
    img:require('./img/1.jpg'),
    title:'Título de noticia',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
  },
  {
    id:2,
    img:require('./img/2.jpg'),
    title:'Título de noticia',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
  },
  {
    id:3,
    img:require('./img/3.jpg'),
    title:'Título de noticia',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'

  },
  {
    id:4,
    img:require('./img/4.jpg'),
    title:'Título de noticia',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
  },
  {
    id:5,
    img:require('./img/5.jpg'),
    title:'Título de noticia',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
  },{
    id:6,
    img:require('./img/6.jpg'),
    title:'Título de noticia',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
  }
];

export const Noticias = memo(() => {

    return (
      <section id="noticias">
        <div className="container">

          <div className="section-header">
            <h3>Noticias</h3>
            <p style={{marginTop:-30,marginBottom:40}}><button type="button" className="btn btn-light">Ver todas las noticias</button></p>
          </div>

          <div className="row">
            {
              views.map(view =>
                (
                  <div className="col-lg-4 col-md-6 col-12 wow bounceInUp" data-wow-duration="1.4s" key={view.id}>
                    <div className="card mb-4 custome-card">
                        <img src={view.img} className="card-img-top" alt="img"/>
                        <div className="card-body">
                            <h5 className="card-title text-truncate">{view.title}</h5>
                            <p className="card-text">{view.text}</p>
                            <button type="button" className="btn btn-secondary">Leer más</button>
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

