import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import Carrusel from "../components/Carrusel";
import Image from 'react-bootstrap/Image'


function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);
    return (
        
        <div className="body p-2">
                    <Carrusel/>
            
            <div className="featured-products-container container mt-4">
                <div className="textocontainer">
                    
                <h2 className="texto p-2">Ofertas: 25 al 29 de octubre</h2>
                {/* last products here */}

                </div>
                <div className="d-flex justify-content-center flex-wrap">
                    {lastProducts.map((product) => (
                        <ProductPreview {...product} />
                    ))}
                </div>
                <div>
                    <Link to="/category/all" style={{ textAlign: "right", display: "block", textDecoration: "none" }}>
                        ver más {">>"}
                    </Link>
                </div>
            </div>

            <Image src="https://cdn.mos.cms.futurecdn.net/ZefaoejrEEiKKo7pBmCaL6.jpg" className="img-fluid rounded" alt="...">


            </Image>

       

           
           
      

            <div className="recent-products-container container mt-4">
                <div className="textocontainer">
                <h2 className="texto p-2">Productos por categorías</h2>

                </div>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Home;
