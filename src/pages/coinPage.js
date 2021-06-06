import CoinContainer from "../components/coinContainer";
import React from "react";
import MonedeClient from "../client";

class CoinPage extends React.Component {
    client = new MonedeClient()

    constructor(props) {
        super(props);
        this.state = {
            coin: null
        };
    }

    componentDidMount() {
        this.client.getCoinMarket().then(coin => {
                this.setState({
                    coin: coin
                });
            }
        )
    }

    render() {
        return (
            <div className='coinPage'>
                <CoinContainer coin={this.props.coin}/>
            </div>
        )
    }
}

export default CoinPage;