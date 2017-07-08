"use strict";
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class ForecastList extends Component {
    render(){
        return (
            <div>
                <Chart/>
            </div>
        );
    }
}

function mapActionsToProps(dispatch){
    return bindActionCreators(ForecastList, dispatch);
}

function mapStateToProps(){
    return {};
}

export default connect(mapStateToProps, mapActionsToProps)(ForecastList);
