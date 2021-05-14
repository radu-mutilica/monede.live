import 'bootstrap/dist/css/bootstrap.min.css';
import './monede.css';
import MonedeClient from "./client";
import MonedeNavbar from "./components/navbar";
import CoinList from "./components/coinlist";


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
                <MonedeNavbar>

                </MonedeNavbar>
                <CoinList coins={this.state.coins}></CoinList>
                <div className="monede-footer centered">
                </div>
            </div>
        )
    }
}


export default Monede;
