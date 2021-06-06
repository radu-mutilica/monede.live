import React from 'react';
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import moment from "moment";

// todo: replace the volume chart with the trend one
// todo: move volume chart lower
// todo: style the xaxis grey

class VolumeChart extends React.Component {

    render() {
        return (
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
                            fill="#ebeff0"
                            dot={false}/>
                        <Tooltip/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default VolumeChart;