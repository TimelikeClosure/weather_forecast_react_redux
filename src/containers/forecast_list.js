"use strict";
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Chart from '../components/chart';

class ForecastList extends Component {
    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            City Name
                        </td>
                        <td>
                            <Chart/>
                        </td>
                        <td>
                            <Chart/>
                        </td>
                        <td>
                            <Chart/>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(ForecastList);
