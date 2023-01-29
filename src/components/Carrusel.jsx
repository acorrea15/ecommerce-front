import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../imágenes/carrusel1.jpg'
import imagen2 from '../imágenes/carrusel2.jpg'
import imagen3 from '../imágenes/carrusel3.jpg'


function Carrusel() {
  return (
    <Carousel className='m-4'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="First slide"
        />
        <Carousel.Caption>
         
          <p>Accesorios a tu medida</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"
        />

        <Carousel.Caption>
          
          <p>Envíos gratis miércoles y viernes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"
        />

        <Carousel.Caption>
          
          <p>
            Asesoramiento técnico en todos nuestros productos
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;