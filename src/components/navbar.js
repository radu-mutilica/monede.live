import {Navbar} from 'react-bootstrap';
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
            </Navbar>
        )
    }
}


export default MonedeNavbar;