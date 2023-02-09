import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';


export default function App() {
  return (
    <MDBFooter className='footer shadow text-center text-black rounded' style={{ backgroundColor: '#fff159' }}>
      <MDBContainer className='p-4 footer'></MDBContainer>

      <div className='text-center p-3 m4 footer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: Comisión 5i - RollingCodeSchool
      </div>
      <div className='m-3 p-2 text-center'>
        <a className='texto2 text-black' style={{ textDecoration: 'none' }} href='/signup'>
          ecommerce-5i
        </a>

      </div>
    </MDBFooter>
  );
}