import { useState,memo } from 'react';
import Lightbox from 'react-image-lightbox';
import './galerias.css';

const imgs = [
  require('./img/1.jpg'),
  require('./img/2.jpg'),
  require('./img/3.jpg'),
  require('./img/4.jpg'),
  require('./img/5.jpg'),
  require('./img/6.jpg'),
  require('./img/7.jpg'),
  require('./img/8.jpg'),
  require('./img/9.jpg'),
  require('./img/10.jpg'),
  require('./img/1.jpg'),
  require('./img/4.jpg'),
  require('./img/8.jpg'),
  require('./img/5.jpg')
]

export const Galerias = memo(() => {

    const images = imgs;

    const [lightbox, setLightbox] = useState({
        photoIndex: 0,
        isOpen: false,
    });

   
    return (
        <section id="galerias">
          <div className="container">

            <div className="section-header">
              <h3>Galeria último torneo</h3>
              <p style={{marginTop:-30,marginBottom:40}}><button type="button" className="btn btn-outline-dark">Ver todas las galerias</button></p>
            </div>
    
            <div className="row img-galery">

              <div className="col-md-3 col-sm-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:0,
                      isOpen: true 
                    })} 
                    src={imgs[0]} 
                    alt="img" 
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:1,
                      isOpen: true 
                    })} 
                    src={imgs[1]} 
                    alt="img" 
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:2,
                      isOpen: true 
                    })} 
                    src={imgs[2]} 
                    alt="img" 
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:3,
                      isOpen: true 
                    })} 
                    src={imgs[3]} 
                    alt="img" 
                  />
                </div>
              </div>


              <div className="col-md-3 col-sm-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:4,
                      isOpen: true 
                    })} 
                    src={imgs[4]} 
                    alt="img" 
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:5,
                      isOpen: true 
                    })} 
                    src={imgs[5]} 
                    alt="img" 
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:6,
                      isOpen: true 
                    })} 
                    src={imgs[6]} 
                    alt="img" 
                  />
                </div>
              </div>


              <div className="col-md-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:7,
                      isOpen: true 
                    })} 
                    src={imgs[7]} 
                    alt="img" 
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:8,
                      isOpen: true 
                    })} 
                    src={imgs[8]} 
                    alt="img" 
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:9,
                      isOpen: true 
                    })} 
                    src={imgs[9]} 
                    alt="img" 
                  />
                </div>
              </div>

            
              <div className="col-md-3 col-sm-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:10,
                      isOpen: true 
                    })} 
                    src={imgs[10]} 
                    alt="img" 
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:11,
                      isOpen: true 
                    })} 
                    src={imgs[11]} 
                    alt="img" 
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:12,
                      isOpen: true 
                    })} 
                    src={imgs[12]} 
                    alt="img" 
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="container-img">
                  <img 
                    onClick={()=> setLightbox({
                      photoIndex:13,
                      isOpen: true 
                    })} 
                    src={imgs[13]} 
                    alt="img" 
                  />
                </div>
              </div>

            </div>


            {lightbox.isOpen && (
                <Lightbox
                    mainSrc={images[lightbox.photoIndex]}
                    nextSrc={images[(lightbox.photoIndex + 1) % images.length]}
                    prevSrc={images[(lightbox.photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => 
                        setLightbox({ 
                            ...lightbox,
                            isOpen: false 
                        })
                    }
                    onMovePrevRequest={() =>
                        setLightbox({
                            ...lightbox,
                            photoIndex: (lightbox.photoIndex + images.length - 1) % images.length,
                        })
                    }
                    onMoveNextRequest={() =>
                        setLightbox({
                            ...lightbox,
                            photoIndex: (lightbox.photoIndex + 1) % images.length,
                        })
                    }
                />
            )}


        </div>
      </section>
    
    )
})

