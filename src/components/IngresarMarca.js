import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import "../App.css";

function IngresarMarca () {
    
const navigate = useNavigate();

let marca = {nombre: ""};

const handleChange = (e) => {
    e.preventDefault();
    marca.nombre = e.target.value;
}

const irHome = () => {
    navigate("/");
}

const registrarMarca = async () => {
    console.log(marca.nombre);
    const requestOptions = {
        method: "POST",
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(marca)
    };
    if (marca.nombre !== "") {
        const response = await fetch("http://localhost:3001/ingresos/marcas", requestOptions);
        const data = await response.json();
        console.log(data);

        if (data === 200) {
            alert("La marca fue ingresada con exito");
            setTimeout(() => {
                irHome();
            }, 1000);
        } else {
            alert("Ocurrio un problema con el registro de la marca");
        }
    } else {
        alert("Debe completar el campo MARCA");
    }
}

return (
    <>
        <Container>
            <Row className="margen-superior">
                <Col>
                    <h3>Formulario de ingreso de Marca</h3>
                </Col>
            </Row>
            <Row className="margen-superior">
                <Col xs={1}>
                    <p className="negrita">Marca</p>
                </Col>
                <Col xs={4}>
                    <input onChange={handleChange} placeholder="Ingrese la marca" type="text" name="marca"/>
                </Col>
            </Row>
            <Row className="margen-superior2">
                <Col xs={{offset: 1}}>
                    <Button onClick={registrarMarca} className="tamanio-boton">
                        Registrar Marca
                    </Button>
                </Col>
            </Row>
        </Container>
    </>
)

}

export default IngresarMarca;