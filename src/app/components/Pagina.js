import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Pagina(props) {
    return (
        <>
            {/* barra de navegação */}
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Conversor" id="basic-nav-dropdown">


                            <NavDropdown.Item href="/formulario/imcFormic">Convesor de moeda Formic</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>



            {/* titulo */}
            <div className='text center'>
                <h1>{props.tutulo}</h1>
            </div>




            {/* conteudo da pagina */}

            <Container>
                {props.children}
            </Container>


        </>
    )
}
