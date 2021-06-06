import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import React from 'react';
import Icon from '../assets/img/icon.svg';

class MonedeNavbar extends React.Component {
    render() {
        return (
            <Navbar fixed="top" bg="light" expand="lg">
                <Navbar.Brand>
                    <img id="brandIcon" src={Icon} className="brand" alt="brand" height={30}/>
                    <span id="brandTitle">monede</span>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav mr-auto">
                    <Nav>
                        <Nav.Link href="#home">About</Nav.Link>
                    </Nav>
                    <NavDropdown className="mr-auto" title="Top coins">
                        <NavDropdown.Item href="#action/3.1">Hour</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">4 Hours</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Daily</NavDropdown.Item>
                    </NavDropdown>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-secondary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default MonedeNavbar;