import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "../App.css";



function IngresarArticulo() {

    const navigate = useNavigate();

    const [articulo, setArticulo] = useState({idArticulo: "", idMarca: "", idTalle: "", idCategoria: "", idProveedor: "", precio: "", costo: "", cantidad: ""});
    let marcas = [];
    let talles = [];
    let categorias = [];
    let proveedores = [];

    const irHome = () => {
        navigate('/');
    }
    
    //const response = await fetch("http://localhost:3001/consultas/marcas");
    const traerMarcas = async () => {
        const response = await fetch("http://localhost:3001/consultas/marcas");
        const data = await response.json();
        for (let i = 0; i < data.length; i++) {
            let objetoMarca = { value: "", label: "" };
            objetoMarca.label = data[i].nombre;
            objetoMarca.value = data[i].idMarca;
            marcas.push(objetoMarca);
        }
    }

    const traerTalles = async () => {
        const response = await fetch("http://localhost:3001/consultas/talles");
        const data = await response.json();
        for (let i = 0; i < data.length; i++) {
            let objetoTalle = { value: "", label: ""};
           objetoTalle.label = data[i].descripcion;
           objetoTalle.value = data[i].idTalle;
           talles.push(objetoTalle); 
                  
        }
    }

    const traerCategorias = async () => {
        const response = await fetch('http://localhost:3001/consultas/categorias');
        const data = await response.json()
        for (let i = 0; i < data.length; i++) {
            let objetoCategoria = { value: "", label: ""};
            objetoCategoria.label = data[i].descripcion;
            objetoCategoria.value = data[i].idCategoria;
            categorias.push(objetoCategoria);            
        }
    }

    const traerProveedores = async () => {
        const response = await fetch('http://localhost:3001/consultas/proveedores');
        const data = await response.json();
        for (let i = 0; i < data.length; i++) {
            let objetoProveedor = {value: "", label: ""};
            objetoProveedor.label = data[i].nombre;
            objetoProveedor.value = data[i].idProveedor;
            proveedores.push(objetoProveedor);
        }
    }

    // const handleChange = (e, inputName) => {
    //     idMarca = e.value;
    //     console.log(idMarca);
    //     console.log(inputName.name);
    // }

    const handleChange = (e, inputName) => {
        let { value } = e
        setArticulo({...articulo, [inputName.name]: value})
        console.log(articulo)
    }

    const handleChange2 = (e) => {
        // codArt = e.target.value;
        // console.log(codArt);
        e.preventDefault();
        const {name, value} = e.target;
        setArticulo({...articulo, [name]:value})
    }

    const ingresarArticulo = async () => {
        console.log(articulo);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(articulo)
        }
        if (articulo.cantidad !== "" && articulo.costo !== "" && articulo.idArticulo !== "" 
        && articulo.idCategoria !== "" && articulo.idMarca !== "" && articulo.idProveedor !== "" &&
        articulo.idTalle !== "" && articulo.precio !== "" ) {
            const response = await fetch('http://localhost:3001/ingresos/articulos', requestOptions);
            const data = await response.json();
            console.log(data);
            
            if (data === 200) {
                alert("el articulo fue ingresado con éxito");
                setTimeout(() => {
                    irHome();
                }, 100);
            } else {
                alert("Ocurrio un problema con el ingreso de este artículo");
            }
        } else {
            alert("Debe completar todos los datos");
        }
    }

    // useEffect(async () => {
    //     await traerMarcas();
    //     await traerTalles();
    //     await traerCategorias();
    //     await traerProveedores();
    // })

    return (
        <>
            <Container>
                <Row className="margen-superior3">
                    <Col>
                        <h3>Formulario Alta de Producto</h3>
                    </Col>
                </Row>
                <Row className="margen-superior2">
                    <Col xs={2}>
                        <p className="negrita">Codigo Articulo</p>
                    </Col>
                    <Col xs={4}>
                        <input onChange={handleChange2} type="text" name="idArticulo"/>
                    </Col>
                </Row>
                <Row className="margen-superior3">
                    <Col xs={2}>
                        <p className="negrita">Seleccione Marca</p>
                    </Col>
                    <Col xs={4}>
                        <Select options={marcas} onChange={handleChange} name="idMarca" onMenuOpen={traerMarcas}/>
                    </Col>
                </Row>
                <Row className="margen-superior3">
                    <Col xs={2}>
                        <p className="negrita">Seleccione Talle</p>
                    </Col>
                    <Col xs={4}>
                        <Select options={talles} onChange={handleChange} name="idTalle" onMenuOpen={traerTalles}/>
                    </Col>
                </Row>
                <Row className="margen-superior3">
                    <Col xs={2}>
                        <p className="negrita">Seleccione Categoria</p>
                    </Col>
                    <Col xs={4}>
                        <Select options={categorias} onChange={handleChange} name="idCategoria" onMenuOpen={traerCategorias}/>
                    </Col>
                </Row>
                <Row className="margen-superior3">
                    <Col xs={2}>
                        <p className="negrita">Seleccione Proveedor</p>
                    </Col>
                    <Col xs={4}>
                        <Select options={proveedores} onChange={handleChange} name="idProveedor" onMenuOpen={traerProveedores}/>
                    </Col>
                </Row>
                <Row className="margen-superior3">
                    <Col xs={2}>
                        <p className="negrita">Precio de Venta</p>
                    </Col>
                    <Col xs={4}>
                    <input onChange={handleChange2} type="number" name="precio"/>
                    </Col>
                </Row>
                <Row className="margen-superior3">
                    <Col xs={2}>
                        <p className="negrita">Precio de Costo</p>
                    </Col>
                    <Col xs={4}>
                    <input onChange={handleChange2} type="number" name="costo"/>
                    </Col>
                </Row>
                <Row className="margen-superior3">
                    <Col xs={2}>
                        <p className="negrita">Ingrese Cantidad</p>
                    </Col>
                    <Col xs={4}>
                    <input onChange={handleChange2} type="number" name="cantidad"/>
                    </Col>
                </Row>
                <Row className="margen-superior2">
                    <Col xs={{offset: 1}}>
                        <Button onClick={ingresarArticulo} className="tamanio-boton">
                            Ingresar Articulo
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IngresarArticulo;