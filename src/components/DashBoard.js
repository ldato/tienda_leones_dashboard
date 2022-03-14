import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import "../App.css";

function DashBoard() {

    let navigate = useNavigate();

    const IngresoCliente = async () => {
        navigate('/IngresarCliente');
    }

    const IngresoMarca = async () => {
        navigate('/IngresarMarca');
    }

    const IngresarTalle = async () => {
        navigate('/IngresarTalle');
    }

    const IngresarCategoria = () => {
        navigate('/IngresarCategoria');
    }

    const IngresarProveedor = () => {
        navigate('/IngresarProveedor');
    }

    const IngresarArticulo = () => {
        navigate('/IngresarArticulo');
    }

    return (
        <>
            <Container>
                <Row className="margen-superior">
                    <Col>
                        <h3>Acciones a realizar</h3>
                    </Col>
                </Row>
                <Row className="margen-superior">
                    <Col xs={3}>
                    <Button onClick={IngresoCliente} className="tamanio-boton">Ingresar Cliente</Button>
                    </Col>
                    <Col xs={3}>
                    <Button onClick={IngresarArticulo} className="tamanio-boton">Ingresar Articulo</Button>
                    </Col>
                    <Col xs={3}>
                    <Button onClick={IngresarCategoria} className="tamanio-boton">Ingresar Categoria</Button>
                    </Col>
                </Row>
                <Row className="margen-superior">
                    <Col xs={3}>
                    <Button onClick={IngresoMarca} className="tamanio-boton">Ingresar Marca</Button>
                    </Col>
                    <Col xs={3}>
                    <Button onClick={IngresarTalle} className="tamanio-boton">Ingresar Talle</Button>
                    </Col>
                    <Col xs={3}>
                    <Button onClick={IngresarProveedor} className="tamanio-boton">Ingresar Proveedor</Button>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default DashBoard;