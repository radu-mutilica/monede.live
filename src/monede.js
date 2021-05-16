import "bootstrap/dist/css/bootstrap.min.css";
import "./monede.css";
import React from "react";
import MonedeClient from "./client";
import MonedeNavbar from "./components/navbar";
import CoinList from "./components/coinlist";


class Monede extends React.Component {
    client = new MonedeClient()

    constructor(props) {
        super(props);
        this.state = {
            coins: []
        };
    }

    componentDidMount() {
        this.client.requestCoins().then(coins => {
            console.log(coins);
                this.setState({
                    coins: coins
                });
            }
        )
    }

    render() {
        return (
            <div className="monede">
                <MonedeNavbar/>
                <div id="monedeBody">
                    <CoinList coins={this.state.coins}/>
                </div>
            </div>
        )
    }
}


export default Monede;
