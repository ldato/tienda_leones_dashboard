import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import "../App.css";


function IngresarCliente() {

    const navigate = useNavigate();

    const [cliente, setCliente] = useState({ nombre: "", apellido: "", dni: "", telefono: "", email: "", direccion: "" });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value })
        // console.log("name y value");
        // console.log([name] + " " + value);
    }

    const irHome = () => {
        navigate("/");
    }

    const registrarUsuario = async () => {
        console.log(cliente);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        };

        if (cliente.apellido !== "" && cliente.dni !== "" && cliente.email !== "" && cliente.nombre !== "") {
            const response = await fetch("http://localhost:3001/ingresos/clientes", requestOptions);
            const data = await response.json();
            console.log(data);

            if (data === 200) {
                alert("el usuario fue registrado con exito");
                setTimeout(() => {
                    irHome();
                }, 1000);
            } else {
                alert("Ocurrio un problema con el registro de usuario");
            }

        } else {
            alert("Debe completar los datos requeridos");
        }


    }



    return (
        <>
            <Container>
                <Row className="margen-superior">
                    <Col>
                        <h3>Formulario Alta de Cliente</h3>
                    </Col>
                </Row>
                <Row className="margen-superior">
                    <Col xs={1}>
                        <p className="negrita">Nombre</p>
                    </Col>
                    <Col xs={4}>
                        <input onChange={handleChange} placeholder="Ingrese el nombre" type="text" name="nombre" />
                        --requerido
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        <p className="negrita">Apellido</p>
                    </Col>
                    <Col xs={4}>
                        <input onChange={handleChange} placeholder="Ingrese el apellido" type="text" name="apellido" />
                        --requerido
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        <p className="negrita">DNI</p>
                    </Col>
                    <Col xs={4}>
                        <input onChange={handleChange} placeholder="Ingrese Numero de DNI" type="number" name="dni" />
                        --requerido
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        <p className="negrita">Teléfono</p>
                    </Col>
                    <Col xs={4}>
                        <input onChange={handleChange} placeholder="Ingrese Numero de Telefono" type="number" name="telefono" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        <p className="negrita">E-Mail</p>
                    </Col>
                    <Col xs={4}>
                        <input onChange={handleChange} placeholder="Ingrese E-Mail" type="email" name="email" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        <p className="negrita">Dirección</p>
                    </Col>
                    <Col xs={4}>
                        <input onChange={handleChange} placeholder="Ingrese Dirección" type="text" name="direccion" />
                    </Col>
                </Row>
                <Row className="margen-superior2">
                    <Col xs={{ offset: 1 }}>
                        <Button onClick={registrarUsuario} className="tamanio-boton">
                            Registrar Ciente
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IngresarCliente;
