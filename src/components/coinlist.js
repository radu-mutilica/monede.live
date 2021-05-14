import React from 'react';
import CoinCard from "./coincard";

class CoinList extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.coins.map(
                        (coin, _) => (
                           <CoinCard coin={coin}></CoinCard>
                        )
                    )
                }
            </div>
        );
    }
}

export default CoinList;