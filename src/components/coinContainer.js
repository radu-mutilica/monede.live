import React from 'react';
import CoinCard from "./coinCard";
import {Col, Container, Row} from "react-bootstrap"
import StatsCard from "./statsCard";

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