"use strict";
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Chart from '../components/chart';

class ForecastList extends Component {
    renderList(){
       return this.props.weather.map(function(city){
           const temp = city.list.map(function({main: {temp}}){
               return temp;
           });
           const humidity = city.list.map(function({main: {humidity}}){
               return humidity;
           });
           const pressure = city.list.map(function({main: {pressure}}){
               return pressure;
           });
           return (
               <tr key={key()}>
                   <td>{city.city.name}</td>
                   <td>Temperature: {temp}<Chart /></td>
                   <td>Humidity: {humidity}<Chart /></td>
                   <td>Pressure: {pressure}<Chart /></td>
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
