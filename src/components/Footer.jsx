import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='footer m-3 shadow text-center text-black rounded' style={{ backgroundColor: '#ffe600' }}>
      <MDBContainer className='p-4 footer'></MDBContainer>

      <div className='text-center p-3 m4 footer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:Comisión 5I
      </div>
      <div className='m-3 p-2 text-center'>
        <a className='texto2 text-black' style={{ textDecoration: 'none' }} href='/signup'>
          E-Commerce 5I
        </a>

      </div>
    </MDBFooter>
  );
}