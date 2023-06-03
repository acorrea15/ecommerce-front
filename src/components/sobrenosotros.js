import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import "./sobrenosotros.css";


  import imagenalfredo from '../imágenes/alfredo.jpeg'
  import imagenadolfo from '../imágenes/adolfo.png'



function SobreNosotros() {
    return (
      <div className='div1'>
        <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={imagenalfredo} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Alfredo Correa</MDBCardTitle>
        <MDBCardText>
        Alfredo nació en la ciudad de San Miguel de Tucumán y actualmente tiene 40 años.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>



    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={imagenadolfo} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Adolfo De Boeck</MDBCardTitle>
        <MDBCardText>
          Adolfo nació en la ciudad de San Miguel de Tucumán y actualmente tiene 37 años. 
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>


      </div>

    );
  }
  

  export default SobreNosotros;
