import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img2 from "../../Assests/img2.jpg"; 



export default function Header(){
    return(
        <>
       <Navbar bg="light" expand="lg">
      <Container>
        <Row>
        <Navbar.Brand href="#home"><img src={img2} alt="logo" style={{width:40, height:40}}/></Navbar.Brand>
        </Row>
       
        <Row >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>          
          </Nav>
        </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>

        
        
        </>
    )
}