import React from 'react';
import CoinChart from "./coinchart";
import {Card, Col, Container, Row} from "react-bootstrap"

class CoinContainer extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <Container>
                                <Row>
                                    <Col sm={8}/>
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
                    <CoinChart coin={this.props.coin}/>
                </Card>
            </div>
        );
    }
}

export default CoinContainer;