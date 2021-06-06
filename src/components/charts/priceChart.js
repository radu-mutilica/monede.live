import React from 'react';
import {Area, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import moment from "moment";

// todo: tooltip time formatting
// todo: only show one tooltip on the price chart

class PriceChart extends React.Component {

    render() {
        return (
            <div>
                <ResponsiveContainer height={200} width="100%">
                    <ComposedChart
                        data={this.props.coin.historical}
                        syncId={this.props.coin.symbol + "ChartsSyncId"}
                        margin="0">
                            <defs>
                                <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#1ec4b6" stopOpacity={0.4}/>
                                    <stop offset="100%" stopColor="#ffffff" stopOpacity={0.3}/>
                                </linearGradient>
                                <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#ff5113" stopOpacity={1}/>
                                    <stop offset="25%" stopColor="#ff8d00" stopOpacity={0.8}/>
                                    <stop offset="100%" stopColor="#ff8d00" stopOpacity={0.3}/>
                                </linearGradient>
                            </defs>
                        <XAxis
                            dataKey="time"
                            name="Time"
                            hide="true"
                            domain={['dataMin', 'dataMin']}
                            tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
                            type='number'/>
                        <YAxis
                            yAxisId="left"
                            name="Price"
                            hide="true"
                            domain={['dataMin', 'dataMax']}/>
                        <YAxis
                            tick={false}
                            yAxisId="right"
                            name="Trend"
                            orientation="right"
                            hide="true"
                            domain={[0, 100]}/>
                        <Area
                            name="Price"
                            yAxisId="left"
                            dataKey="price"
                            stroke="#14aa9a"
                            strokeWidth={1.5}
                            strokeOpacity={0.6}
                            fill="url(#priceGradient)"
                            dot={false}/>
                        <Line
                            name="Trend"
                            yAxisId="right"
                            type="monotone"
                            dataKey="trend"
                            stroke="url(#trendGradient)"
                            strokeWidth={4}
                            dot={false}/>
                        <Tooltip/>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default PriceChart;