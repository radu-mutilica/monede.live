import React from 'react';
import CoinContainer from "./coincontainer";

class CoinList extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.coins.map(
                        (coin, _) => (
                           <CoinContainer coin={coin}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default CoinList;