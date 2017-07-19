"use strict";
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Chart from '../components/chart';

class ForecastList extends Component {
    renderList(){
       return this.props.weather.map(function(city){
           const temps = city.list.map(({main: {temp}}) => 1.8 * temp - 459.67);
           const pressures = city.list.map(({main: {pressure}}) => pressure / 68.94757);
           const humidities = city.list.map(({main: {humidity}}) => humidity);
           return (
               <tr key={key()}>
                   <td>{city.city.name}</td>
                   <td><Chart data={temps} color="orange" units="F"/></td>
                   <td><Chart data={pressures} color="green" units="PSI"/></td>
                   <td><Chart data={humidities} color="black" units="%"/></td>
               </tr>
           );
       });
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (PSI)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
            </table>
        );
    }
}

function key(){
    return `${Math.random()}`;
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(ForecastList);
