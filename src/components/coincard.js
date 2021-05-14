import React from 'react';
import CoinChart from "./coinchart";
import {Card, Row, Col, Container} from "react-bootstrap"

class CoinCard extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <Container>
                                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                                <Row>
                                    <Col className="tight-col" xs={12} md={8}>
                                        {this.props.coin.symbol}
                                    </Col>
                                    <Col className="tight-col" xs={6} md={4}>
                                        {this.props.coin.percentage}
                                    </Col>
                                </Row>
                                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                            </Container>

                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.coin.name}</Card.Subtitle>
                        <CoinChart data={this.props.coin.historical}></CoinChart>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>


            </div>
        );
    }
}

export default CoinCard;