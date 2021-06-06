import React from 'react';
import moment from "moment";
import {
    Line,
    LineChart,
    ResponsiveContainer,
    XAxis
} from "recharts";
import {ReactComponent as NotificationIcon} from '../../assets/img/bell.svg';
import {ReactComponent as GrowthIcon} from '../../assets/img/tooltip.svg';


export default class SimpleChart extends React.Component {


    render() {
        const CustomizedDot = (props) => {
            const {cx, cy, stroke, payload, value} = props;
            if (payload.time === this.props.coin.growth.notification) {
                return (
                    <NotificationIcon height={20} width={20} x={cx} y={cy}/>
                );
            } else if (payload.time === this.props.coin.growth.peak) {
                return (
                    <GrowthIcon height={50} width={50} x={cx} y={cy - 80}/>
                );
            } else return null;
        };


        return (
            <div>
                <ResponsiveContainer height={200} width="100%">
                    <LineChart
                        data={this.props.coin.historical} margin="0">
                        <defs>
                            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#ff5113" stopOpacity={1}/>
                                <stop offset="100%" stopColor="#ff5113" stopOpacity={0.1}/>
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="time"
                            name="Time"
                            hide="true"
                            domain={['dataMin', 'dataMin']}
                            tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
                            type='number'/>
                        <Line
                            name="Price"
                            dataKey="price"
                            stroke="url(#priceGradient)"
                            strokeWidth={3}
                            dot={<CustomizedDot/>}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
