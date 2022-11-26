import { Col, Container, Row } from "react-bootstrap";
import "../../css/Left.css";

export default function RightCustom(){
    return(
        <>
        <Container fluid>
            <Row style={{justifyContent:"end"}}>
                <Col xs={4} style={{background:"#290fec",height:400, width:400, position:"relative"}}>                   
                  <div className="boxcontainer" style={{backgroundColor:"orange",padding:0, margin:0, width:300,height:300,fontSize:0,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
                    <div className="boxes" style={{backgroundColor:"#c9e265",padding:0, width:100,height:100,display:"inline-block"}}>
                             <p style={{margin:0,padding:0,fontSize:12}}>this is</p>
                    </div>
                    <div className="boxes" style={{backgroundColor:"#38b6ff", width:100,height:100,display:"inline-block"}}>
                             
                    </div>
                    <div className="boxes" style={{backgroundColor:"#fbbc05", width:100,height:100,display:"inline-block"}}>
                               
                    </div>
                    <div className="boxes_t" style={{backgroundColor:"red",display:"block", width:100,height:100,display:"inline-block"}}>
                   
                    </div>
                    <div className="boxes" style={{backgroundColor:"#8c52ff", width:100,height:100,display:"inline-block"}}>
                          
                    </div>
                    <div className="boxes" style={{backgroundColor:"#a6008c", width:100,height:100,display:"inline-block"}}>

                    </div>
                    <div className="boxes" style={{backgroundColor:"#03989e", width:100,height:100,display:"inline-block"}}>

                    </div>
                    <div className="boxes" style={{backgroundColor:"#6f6f6f", width:100,height:100,display:"inline-block"}}>

                    </div>
                    <div className="boxes" style={{backgroundColor:"#9dfdcd", width:100,height:100,display:"inline-block"}}>

                    </div>

                  </div>
                
                </Col>
            </Row>
        </Container>       
        </>
    )
}