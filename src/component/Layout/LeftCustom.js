import { Col, Container, Row } from "react-bootstrap"
import img from "../../Assests/img.webp"
import { FiEdit } from 'react-icons/fi';
import "../../css/Left.css"

export default function LeftCustom(){
    return(
        <>
      <Container style={{padding:0,margin:0}}>
        <Row >
            <Col xs={3} style={{width:230,height:"100vh",backgroundColor:"#dfffef",position:"relative"}}>
            <FiEdit style={{position:"absolute",top:0,right:0}} />
            <div className="heading" style={{textAlign:"center"}}>
              <p className="maxy" style={{color:"#00c864",fontWeight:700,margin:0}}>Maxy Wilson</p>
              <p className="platinium" style={{color:"#f4c01e",margin:0}}>Platinium</p>
            </div>
            <div className="image_heading">
              <h5 style={{color:"#0054ff",marginTop:9}}>My Journey</h5>
              <img src={img} alt="logo" style={{width:120,height:120,marginLeft:40}}></img>
              <div className="content">
                <p>My Floating Profit</p>
                <p>My Booked Profit</p>
                <p>Commitment rate</p>
                <p style={{color:"#290fec"}}>My People</p>
              </div>
              <div className="content_number">
                <h6>$525</h6>
                <h6>$250</h6>
                <h6>70%</h6>
                <h6 style={{color:"#290fec"}}>20</h6>

              </div>
              
            </div>
            </Col>
        </Row>
      </Container>

        </>
    )
}