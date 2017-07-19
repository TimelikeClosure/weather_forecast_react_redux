"use strict";
import React, {Component} from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

function Chart(props){
    return (
        <Sparklines
            data={props.data}
            height={120}
            width={180}
        >
            <SparklinesLine color="red"/>
        </Sparklines>
    );
}

export default Chart;
