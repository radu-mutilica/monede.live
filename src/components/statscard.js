import React from 'react';
import StatsTable from "./statstable";
import {Card, Col, Container, Row, Badge} from "react-bootstrap"

class StatsCard extends React.Component {

    render() {
        return (
            <div>
                <Card className='borderless'>
                    <Card.Body>
                        <Card.Title>
                            <Container fluid>
                                <Row>
                                    <Col className="tight-col" md="auto">
                                         <Badge style={{marginTop: "5px"}} variant="secondary">
                                             {this.props.coin.symbol}
                                         </Badge>
                                    </Col>
                                    <Col >
                                        <h4>{this.props.coin.name}</h4>
                                    </Col>
                                    <Col>

                                    </Col>
                                </Row>
                            </Container>
                        </Card.Title>
                        <StatsTable coin={this.props.coin}/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default StatsCard;