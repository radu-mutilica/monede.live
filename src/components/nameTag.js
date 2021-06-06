import React from 'react';
import {Card, Col, Container, Row, Badge} from "react-bootstrap"

class NameTag extends React.Component {

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col className="tight-col" md="auto">
                            <Badge style={{marginTop: "5px"}} variant="secondary">
                                {this.props.coin.symbol}
                            </Badge>
                        </Col>
                        <Col>
                            <h4>{this.props.coin.name}</h4>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NameTag;