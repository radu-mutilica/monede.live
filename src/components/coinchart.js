import React from 'react';
import moment from 'moment'
import {Area, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar} from 'recharts';

class CoinChart extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <ResponsiveContainer height={200} width="100%">
                    <ComposedChart
                        data={this.props.coin.historical}
                        syncId={this.props.coin.symbol + "ChartsSyncId"}
                        margin="0">
                        <defs>
                            <defs>
                                <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#1ec4b6" stopOpacity={1}/>
                                    <stop offset="100%" stopColor="#29b2a8" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#ff5113" stopOpacity={1}/>
                                    <stop offset="25%" stopColor="#ff8d00" stopOpacity={0.8}/>
                                    <stop offset="100%" stopColor="#ff8d00" stopOpacity={0.3}/>
                                </linearGradient>
                            </defs>
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
                            domain={['dataMin', 'dataMax']}/>
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
                <div>
                    <ResponsiveContainer height={100} width="100%">
                    <BarChart
                        data={this.props.coin.historical}
                        syncId={this.props.coin.symbol + "ChartsSyncId"}>
                        <defs>
                            <defs>
                                <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#656768" stopOpacity={1}/>
                                    <stop offset="100%" stopColor="#656768" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                        </defs>
                        <XAxis
                            dataKey="time"
                            name="Time"
                            tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
                            type='number'
                            domain={['dataMin', 'dataMax']}/>
                        <YAxis
                            name="Volume"
                            yAxisId="left"
                            dataKey="volume"
                            type='number'
                            hide='true'
                            domain={[0, 'dataMax']}/>
                        <Bar
                            yAxisId="left"
                            name="Volume"
                            type="monotone"
                            dataKey="volume"
                            stroke="false"
                            fill="#dde1e2"
                            dot={false}/>
                        <Tooltip/>
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
        );
    }
}

export default CoinChart;
