import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'


export default function NotFound() {
    return (
        <div>
            <h1>Oops! este enlace está fuera de servicio.</h1>
            <p>Utilizar el siguiente link:<Link to='/'>Home</Link></p>
            



    <Image src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png" className="img-fluid rounded" alt="error 404"></Image>
    

            
        </div>
    )
}