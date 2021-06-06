import React from 'react';
import CompositeChart from "./charts/compositeChart";
import {Card, Col, Container, Row, Button, ButtonGroup} from "react-bootstrap"

class CoinContainer extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <Container fluid>
                                <Row>
                                    <Col className="tight-col">
                                        <div className="timeframeButtons">
                                            <ButtonGroup aria-label="Timeframes">
                                                <Button variant="link" size="sm">1H</Button>
                                                <Button variant="link" size="sm">4H</Button>
                                                <Button variant="link" size="sm">1D</Button>
                                            </ButtonGroup>
                                        </div>
                                    </Col>
                                    <Col sm={4} className="tight-col">
                                        <div className="coinPrice">
                                            <h2>
                                                <span className="slimCurrencySign">
                                                    <sup>$</sup>
                                                </span>
                                                {this.props.coin.current_price}
                                            </h2>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Title>
                    </Card.Body>
                    <CompositeChart coin={this.props.coin}/>
                </Card>
            </div>
        );
    }
}

export default CoinContainer;