import React, { useEffect, useState } from "react";
import { Badge, Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "../axios";
import Loading from "../components/Loading";
import "./OrdersPage.css";

function OrdersPage() {
    const user = useSelector((state) => state.user);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`/users/${user._id}/orders`)
            .then(({ data }) => {
                setLoading(false);
                setOrders(data);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (orders.length === 0) {
        return (
            <Container style={{ minHeight: "75vh" }} >
                <h1 className="text-center pt-3">Sin pedidos todavía</h1>;
            </Container>)
    }

    return (
        
        <Container style={{ minHeight: "75vh" }} >
            <h1 className="text-center">Tus pedidos</h1>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>ID Pedido</th>
                        <th>Estado del Pedido</th>
                        <th>Fecha</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr>
                            <td>{order._id}</td>
                            <td>
                                <Badge bg={`${order.status == "procesando" ? "warning" : "success"}`} text="white">
                                    {order.status}
                                </Badge>
                            </td>
                            <td>{order.date}</td>

                            <td>${order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default OrdersPage;
