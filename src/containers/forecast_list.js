"use strict";
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Chart from '../components/chart';

class ForecastList extends Component {
    renderList(){
       return this.props.weather.map(function(city){
           const temp = city.list.map(({main: {temp}}) => temp);
           const humidity = city.list.map(({main: {humidity}}) => humidity);
           const pressure = city.list.map(({main: {pressure}}) => pressure);
           return (
               <tr key={key()}>
                   <td>{city.city.name}</td>
                   <td><Chart data={temp}/></td>
                   <td><Chart data={humidity}/></td>
                   <td><Chart data={pressure}/></td>
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
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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
