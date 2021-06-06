import React from 'react';
import {Badge, Col, Container, Row, Table} from "react-bootstrap"

class StatsTable extends React.Component {


    render() {
        function toHumanReadable(labelValue) {
            // Nine Zeroes for Billions
            return Math.abs(Number(labelValue)) >= 1.0e+9

                ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
                // Six Zeroes for Millions
                : Math.abs(Number(labelValue)) >= 1.0e+6

                    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
                    // Three Zeroes for Thousands
                    : Math.abs(Number(labelValue)) >= 1.0e+3

                        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

                        : Math.abs(Number(labelValue));
        }

        return (
            <div>
                <Table size="sm">
                    <tbody className="coinStatsTable">
                    <tr>
                        <td className="statName">Market</td>
                        <td>
                            <Container fluid>
                                <Row>
                                    <Col className="tight-col" md="auto">
                                        <Badge variant="light" >
                                            #{this.props.coin.market_cap_rank}
                                        </Badge>

                                    </Col>
                                    <Col className="tight-col">${toHumanReadable(this.props.coin.market_cap)}</Col>
                                </Row>
                            </Container>
                        </td>
                    </tr>
                    <tr>
                        <td className="statName">Supply</td>
                        <td>{toHumanReadable(this.props.coin.circulating_supply)}</td>
                    </tr>
                    <tr>
                        <td className="statName">Total volume</td>
                        <td>{toHumanReadable(this.props.coin.total_volume)}</td>
                    </tr>
                    <tr>
                        <td className="statName">ATH</td>
                        <td>${this.props.coin.ath}</td>
                    </tr>
                    <tr>
                        <td className="statName">ATH change %</td>
                        <td className={
                            Math.sign(this.props.coin.ath_change_percentage) === -1 ?
                                "redStat" : "greenStat"}>
                            {this.props.coin.ath_change_percentage.toLocaleString(
                                undefined, {maximumFractionDigits: 2})}%
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default StatsTable;