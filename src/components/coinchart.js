import React from 'react';
import moment from 'moment'
import {Area, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

class CoinChart extends React.Component {

    render() {
        return (
            <div>
                <ResponsiveContainer height={200} width="100%">
                    <ComposedChart data={this.props.data}>
                        <defs>
                            <defs>
                                <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#34d1c9" stopOpacity={1}/>
                                    <stop offset="95%" stopColor="#34d1c9" stopOpacity={0.1}/>
                                </linearGradient>
                            </defs>
                        </defs>
                        <XAxis
                            dataKey="time"
                            name="Time"
                            domain={['dataMin', 'dataMin']}
                            tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
                            type='number'/>
                        <YAxis
                            yAxisId="left"
                            name="Price"
                            domain={['dataMin', 'dataMin']}/>
                        <YAxis
                            tick={false}
                            yAxisId="right"
                            name="Trend"
                            orientation="right"
                            domain={['dataMin', 'dataMin']}/>
                        <Line
                            name="Trend"
                            yAxisId="right"
                            type="monotone"
                            dataKey="trend"
                            stroke="#d66400"
                            strokeWidth={3}
                            dot={false}/>
                        <Area
                            name="Price"
                            yAxisId="left"
                            type="monotone"
                            dataKey="price"
                            stroke="#34d1c9"
                            strokeWidth={0.3}
                            fill="url(#priceGradient)"
                            dot={false}/>

                        <Tooltip/>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

        );
    }
}

export default CoinChart;