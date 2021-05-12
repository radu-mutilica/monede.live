import React from "react";
import logo from './assets/img/logo-white.svg';
import './monede.css';
import CoinChart from "./components/chart";
import MonedeClient from "./client";


class Monede extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: []
        };
    }

    componentDidMount() {
        new MonedeClient().requestCoins().then(coins => {
                this.setState({
                    coins: coins
                });
            }
        )
    }


    render() {
        return (
            <div className="monede">
                <header className="monede-header centered">
                    <img src={logo} className="monede-logo" alt="logo"/>
                    <p>A cryptocurrency trends aggregator</p>
                </header>
                {
                    this.state.coins.map(
                        (coin, _) => (
                            <CoinChart coin={coin}>

                            </CoinChart>
                        )
                    )
                }
                <div className="monede-footer centered">
                </div>
            </div>
        )
    }
}


export default Monede;
