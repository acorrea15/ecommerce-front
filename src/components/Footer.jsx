import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='footer text-center text-black m-4 ' style={{ backgroundColor: '#ffe600' }}>
      <MDBContainer className='p-4 footer'></MDBContainer>

      <div className='text-center p-3 footer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:Comisión 5I
      </div>
        <a className='text-black' href='/signup'>
          E-Commerce 5I
        </a>
    </MDBFooter>
  );
}