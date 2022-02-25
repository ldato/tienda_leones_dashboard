import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import "../App.css";


function IngresarCategoria() {
    const navigate = useNavigate();

    let categoria = { descripcion: "" };

    const handleChange = (e) => {
        e.preventDefault();
        categoria.descripcion = e.target.value;
    }

    const irHome = () => {
        navigate("/");
    }

    const registrarCategoria = async () => {
        console.log(categoria);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(categoria)
        }

        if (categoria.descripcion !== "") {
            const response = await fetch("http://localhost:3001/ingresos/categorias", requestOptions);
            const data = await response.json();
            console.log(data);

            if (data === 200) {
                alert("La categoria fue ingresada con éxito");
                setTimeout(() => {
                    irHome();
                }, 500)
            } else {
                alert("Ha ocurrido un error al registrar la categoria");
            }
        } else {
            alert("Debe completar el campo CATEGORIA");
        }
    }

    return (
        <>
            <Container>
                <Row className="margen-superior">
                    <Col>
                        <h3>Formulario de ingreso de Categoria</h3>
                    </Col>
                </Row>
                <Row className="margen-superior">
                    <Col xs={2}>
                        <p className="negrita">Categoria</p>
                    </Col>
                    <Col xs={4}>
                        <input onChange={handleChange} placeholder="Ingrese la categoria" type="text" name="categoria" />
                    </Col>
                </Row>
                <Row className="margen-superior">
                    <Col xs={{offset: 1}}>
                        <Button onClick={registrarCategoria} className="tamanio-boton">
                            Registrar Categoria
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IngresarCategoria;