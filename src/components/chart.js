"use strict";
import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function Chart({data, color, units}){
    const average = Math.round(data.reduce((sum, next) => sum + next, 0) / data.length);
    return (
        <div>
            <Sparklines
                data={data}
                height={120}
                width={180}
            >
                <SparklinesLine color={color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average} {units}</div>
        </div>
    );
}

export default Chart;
