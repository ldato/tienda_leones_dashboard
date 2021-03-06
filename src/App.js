import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import IngresarCliente from "./components/IngresarCliente";
import DashBoard from "./components/DashBoard"
import IngresarMarca from "./components/IngresarMarca";
import IngresarTalle from "./components/IngresarTalle";
import IngresarCategoria from "./components/IngresarCategoria";
import IngresarProveedor from "./components/IngresarProveedor";
import IngresarArticulo from "./components/IngresarArticulo";

function App() {

    // let navigate = useNavigate();

    // const IngresoCliente = async () => {
    //     navigate('/IngresarCliente');
    // }


    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<DashBoard />}/>
                    <Route path="/IngresarCliente" element={<IngresarCliente />}/>
                    <Route path="/IngresarMarca" element={<IngresarMarca />}/>
                    <Route path="/IngresarTalle" element={<IngresarTalle />}/>
                    <Route path="/IngresarCategoria" element={<IngresarCategoria />}/>
                    <Route path="/IngresarProveedor" element={<IngresarProveedor />}/>
                    <Route path="IngresarArticulo" element={<IngresarArticulo />}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
