import React, { useEffect, useState } from "react";
import { Table, Button, Badge } from "react-bootstrap";
import axios from "../axios";
import Loading from "./Loading";
function ClientsAdminPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("/users")
            .then(({ data }) => {
                setLoading(false);
                setUsers(data);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e);
            });

            
    }, []);

    if (loading) return <Loading />;
    if (users?.length == 0) return <h2 className="py-2 text-center">No users yet</h2>;

    
    function markDisable(userId) {
        console.log(userId, "<-- userId: markDisable")
        axios
            .patch(`/users/${userId}/mark-disabled`)
            .then(  setLoading(true),              
                    axios
                        .get("/users")
                        .then(({ data }) => {
                            setLoading(false);
                            setUsers(data);
                        })
                        .catch((e) => {
                            setLoading(false);
                            console.log(e);
                        })
            )
            .then(  //setLoading(true),              
                    axios
                        .get("/users")
                        .then(({ data }) => {
                            setLoading(false);
                            setUsers(data);
                        })
                        .catch((e) => {
                            setLoading(false);
                            console.log(e);
                        })
            )

            .catch((e) => console.log(e));           
    }
    


    return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>Client Id</th>
                    <th>Client Name</th>
                    <th>Email</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            {user.isEnabled === true ? (                                 
                                <Button className="btn-success" size="sm" onClick={() => markDisable(user._id)}>
                                    Habilitado - Presione para Inhabilitar
                                </Button>
                            ) : (
                                <Badge bg="danger">¡Inhabilitado!</Badge>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );

    return <div>ClientsAdminPage</div>;
}

export default ClientsAdminPage;
