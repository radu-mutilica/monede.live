import React from "react";
import MonedeClient from "../client";
import CoinTable from "../components/coinTable";


class TopPage extends React.Component {
    client = new MonedeClient()

    constructor(props) {
        super(props);
        this.state = {
            coins: []
        };
    }

    componentDidMount() {
        this.client.getTopCoins().then(coins => {
                this.setState({
                    coins: coins
                });
            }
        )
    }

    render() {
        return (
            <div>
                <CoinTable coins={this.state.coins}/>
            </div>
        )
    }
}

export default TopPage;