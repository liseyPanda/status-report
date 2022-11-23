import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Dashboard from '../pages/Dashboard';
import Form from '../pages/Form';
import '../App.css'

function AppRouter() {
    return (
        <>
        <Navbar className="menu" bg="light">
            <Container fluid>
            <Navbar.Brand href="/dashboard">Sterling</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/dashboard">Dashbaord</Nav.Link>
                <Nav.Link href="/form">Form</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/form" element={<Form/>}/>
                </Routes>
            </BrowserRouter>
        </>
       
    )
}

export default AppRouter;