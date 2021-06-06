import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap"
import {Link} from "react-router-dom";
import ArrowRight from '../assets/img/arrow-right.svg';
import GoogleTrendsLogo from '../assets/img/google-trends-logo.jpg';
import CoingeckoLogo from '../assets/img/coingecko-logo.webp';
import SimpleChart from "../components/charts/simpleChart";
import MonedeClient from "../client";

class LandingPage extends React.Component {
    client = new MonedeClient()

    constructor(props) {
        super(props);
        this.state = {
            coin: null
        };
    }

    componentDidMount() {
        this.client.getLatestExample().then(coin => {
                this.setState({
                    coin: coin
                });
            }
        )
    }


    render() {
        const {coin} = this.state;
        if (coin === null) {
            return null;
        }
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <div>
                                <span
                                    className="big-landing-text">Find out about the <b>hottest</b> cryptocurrencies</span>
                                <h4>Discover <b>new</b> projects before they reach the news</h4>
                            </div>
                            <div className="big-landing-text-button-container">
                                <Button variant="primary" size="lg" className="btn-xlg">Get started ></Button>
                            </div>
                            <div className="big-landing-text-link-container">
                                <Link to={"/how"}>See how it works
                                    <img src={ArrowRight} style={{"marginLeft": "1vh"}} alt={"arrow-right"}/>
                                </Link>
                            </div>
                        </Col>
                        <Col>
                            <SimpleChart coin={coin}/>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <div>
                                <img className="tech-image" src={GoogleTrendsLogo} alt={"google-trends"}/>
                            </div>
                        </Col>
                        <Col>
                            <span className="big-plus">+</span>
                        </Col>
                        <Col>
                            <div>
                                <img className="tech-image" src={CoingeckoLogo} alt={"google-trends"}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                    <hr/>
                </Container>
            </div>
        )
    }
}

export default LandingPage;