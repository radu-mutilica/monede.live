import React from 'react';
import {Table} from "react-bootstrap"
import {Link} from "react-router-dom";


class CoinTable extends React.Component {
    render() {
        return (
            <div>
                <Table hover>
                    <thead>
                    <tr>
                        <th>Trend</th>
                        <th>24h</th>
                        <th>Coin</th>
                        <th>Market cap</th>
                        <th>Volume</th>
                        <th>Supply</th>
                        <th>ATH</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.coins.map(
                            (coin, _) => (
                                <tr coinSymbol={coin.symbol}>
                                    <td></td>
                                    <td>{coin.price_change_percentage_24h}%</td>
                                    <td>
                                        <Link to={"/coin?symbol=" + coin.id}>
                                            {coin.name} ({coin.symbol})
                                        </Link>
                                    </td>
                                    <td>#{coin.market_cap_rank} {coin.market_cap}</td>
                                    <td>{coin.total_volume}</td>
                                    <td>{coin.total_supply}</td>
                                    <td>{coin.ath}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </Table>

            </div>
        );
    }
}

export default CoinTable;