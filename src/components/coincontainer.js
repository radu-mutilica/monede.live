import React from 'react';
import CoinCard from "./coincard";
import {Card, Col, Container, Row} from "react-bootstrap"
import StatsCard from "./statscard";

class CoinContainer extends React.Component {

    render() {
        return (
            <div className="coinContainer">
                <Container fluid>
                    <Row>
                        <Col sm={3}>
                            <StatsCard coin={this.props.coin}/>
                        </Col>
                        <Col sm={9}>
                            <CoinCard coin={this.props.coin}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CoinContainer;