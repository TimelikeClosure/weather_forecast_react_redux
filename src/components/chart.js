"use strict";
import React, {Component} from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

function Chart({data, color}){
    return (
        <Sparklines
            data={data}
            height={120}
            width={180}
        >
            <SparklinesLine color={color}/>
        </Sparklines>
    );
}

export default Chart;
