import React,{Component} from "react";
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown,Nav,Form,FormControl,Button,Container } from "react-bootstrap";
import Modal from "./Modal/Modal";

export default class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = { vacancies : []}
        console.log("const_NavBar")
        console.log(this.props.miseajour)
        console.log("const_NavBar")
      }
      state = {
        visible:false
    }
    show = () => { this.setState({ visible: true})}
    hide = () => { this.setState({ visible: false }) }
    
    miseajour2 = (X)=>{
        this.props.miseajour(X)
    }
    render(){ 
        console.log("nav")
        console.log(this.props.miseajour)
        console.log("bar")
        return(
            <>
            <Navbar bg="light" expand="lg" style={{  background: '#e3f2fd'}} className="navbar navbar-light">
                <Container fluid >
                    <Navbar.Brand href="#">Vacancies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav 
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                        Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    &nbsp;&nbsp;
                        <Button onClick={this.show} className="adroite"  variant="outline-danger"> Add </Button>
                            <Modal 
                                miseajour={this.props.miseajour}
                                visible={this.state.visible}
                                hide = {this.hide}
                                switch = {1}
                            />
                    
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </>
        )
    }
}