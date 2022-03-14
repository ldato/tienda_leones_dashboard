import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import "../App.css";


function IngresarTalle () {
    
const navigate = useNavigate();

let talle = {descripcion: ""};

const handleChange = (e) => {
    e.preventDefault();
    talle.descripcion = e.target.value;
}

const irHome = () => {
    navigate("/");
}

const registrarTalle = async () => {
    console.log(talle.descripcion);
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(talle)
    };
    if (talle.descripcion !== "") {
        const response = await fetch("http://localhost:3001/ingresos/talles", requestOptions);
        const data = await response.json();

        if (data === 200) {
            alert("El talle fue ingresado con éxito");
            setTimeout(() => {
                irHome();
            }, 100);
        } else {
            alert("Ha ocurrido un problema con el ingreso de la marca");
        }
    } else {
        alert("Debe completar el campo TALLE");
    }
}

    return (
        <>
            <Container>
                <Row className="margen-superior">
                    <Col>
                        <h3>Formulario de ingreso de Talles</h3>
                    </Col>
                </Row>
                <Row className="margen-superior">
                    <Col xs={1}>
                        <p className="negrita">Talle</p>
                    </Col>
                    <Col xs={4}>
                        <input onChange={handleChange} placeholder="Ingrese el talle" type="text" name="talle"/>
                    </Col>
                </Row>
                <Row className="margen-superior2">
                    <Col xs={{offset: 1}}>
                        <Button onClick={registrarTalle} className="tamanio-boton">
                            Registrar Talle
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IngresarTalle;