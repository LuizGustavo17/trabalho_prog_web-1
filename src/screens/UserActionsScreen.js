import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" style={{ paddingLeft: '10%' }}>
        <Navbar.Brand style={{ color: 'aliceblue' }} href="#">
          Navbar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="ml-auto">
            <Nav.Link style={{ color: 'aliceblue' }} href="#">
              Sair
            </Nav.Link>
            <Nav.Link style={{ color: 'aliceblue' }} href="#">
              Nova Conversa
            </Nav.Link>
            <Nav.Link style={{ color: 'aliceblue' }} href="#">
              Nova Versão
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img
              style={{ width: '850px', height: '850px' }}
              src="oraculo.png"
              className="mx-auto d-block"
              alt="Imagem no centro da tela"
            />
          </div>
        </div>
      </div>
      <div
        style={{ position: 'absolute', bottom: '0', paddingRight: '10%', paddingLeft: '10%' }}
        className="input-group mb-3"
      >
        <input type="text" className="form-control" placeholder="Digite algo, vou responder da melhor forma." />
      </div>
    </div>
  );
}

export default App;