import React from 'react';
import PriceChart from "./priceChart";
import VolumeChart from "./volumeChart";


class CompositeChart extends React.Component {
    render() {
        return (
            <div>
                <div>

                        <PriceChart coin={this.props.coin}/>
                </div>
                <div>
                        <VolumeChart coin={this.props.coin}/>
                </div>
            </div>
        );
    }
}

export default CompositeChart;
