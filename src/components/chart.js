import React, {Component} from 'react';
import {curveCatmullRom} from 'd3-shape';
import '../../node_modules/react-vis/dist/style.css';
import {LineSeries, XAxis, XYPlot, YAxis} from 'react-vis';

class CoinChart extends Component {

    render() {
        console.log(this.props.coin)
        return (
            <div className="CoinChart">
                <p>{this.props.coin.name}</p>
                <XYPlot height={300} width={900}>
                    <XAxis/>
                    <YAxis/>
                    <LineSeries
                        curve={curveCatmullRom.alpha(0.5)}
                        data={this.props.coin.historical.price}
                        style={{
                            strokeLinejoin: 'round',
                            strokeWidth: 4
                        }}
                    />
                    <LineSeries
                        data={this.props.coin.historical.volume}/>
                </XYPlot>
            </div>
        );
    }
}

export default CoinChart;