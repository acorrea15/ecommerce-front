import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../imágenes/carrusel1.jpg'
import imagen2 from '../imágenes/carrusel2.jpg'
import imagen3 from '../imágenes/carrusel3.jpg'
import "./Carrusel.css"

function Carrusel() {
  return (
    <Carousel className='m-4'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="First slide"
        />
        <Carousel.Caption className='p_box_shadow'>         
          <p>Accesorios a tu medida</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"
        />

        <Carousel.Caption className='p_box_shadow'>
          
          <p>Envíos gratis</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"
        />

        <Carousel.Caption className='p_box_shadow'>          
          <p>
            Asesoramiento técnico
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;