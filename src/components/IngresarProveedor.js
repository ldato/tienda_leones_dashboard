import React, {useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function IngresarProveedor () {
    
    const navigate = useNavigate();

    const [proveedor, setProveedor] = useState({nombre: "", telefono: "", email: ""});

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setProveedor({...proveedor, [name]: value});
    }

    const irHome = () => {
        navigate('/');
    }

    const registrarProveedor = async () => {
        console.log(proveedor);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(proveedor)
        }

        if (proveedor.nombre !== "" && proveedor.telefono !== "" && proveedor.email !== "") {
            const response = await fetch("http://localhost:3001/ingresos/proveedores", requestOptions);
            const data = await response.json();

            if (data === 200) {
                alert("El proveedor fue registrado con éxito");
                setTimeout(() => {
                    irHome();
                }, 100);
            } else {
                alert("Ha ocurrido un problema con el registro del Proveedor");
            }
        } else {
            alert("Debe completar los campos requeridos");
        }
    }

    return (
        <>
            <Container>
                <Row className="margen-superior">
                    <Col>
                        <h3>Formulario de alta de Proveedor</h3>
                    </Col>
                </Row>
                <Row className="margen-superior">
                    <Col xs={1}>
                        <p className="negrita">Nombre</p>
                    </Col>
                    <Col xs={4}>
                        <input onChange={handleChange} placeholder="Ingrese nombre" type="text" name="nombre" />
                        ---requerido
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        <p className="negrita">Telefono</p>
                    </Col>
                    <Col xs={4}>
                        <input onChange={handleChange} placeholder="Ingrese telefono" type="number" name="telefono" />
                        ---requerido
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        <p className="negrita">E-mail</p>
                    </Col>
                    <Col xs={4}>
                        <input onChange={handleChange} placeholder="Ingrese email" type="text" name="email" />
                        ---requerido
                    </Col>
                </Row>
                <Row className="margen-superior2">
                    <Col xs={{offset: 1}}>
                        <Button onClick={registrarProveedor} className="tamanio-boton"> Registrar Proveedor</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IngresarProveedor;