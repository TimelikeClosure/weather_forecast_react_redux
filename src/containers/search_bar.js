"use strict";
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        console.log(`Form submitted with value: "${this.state.term}"`);

        // We need to go and fetch weather data
    }

    render(){
        return (
            <form
                className="input-group"
                onSubmit={this.onFormSubmit}
            >
                <input
                    onChange={this.onInputChange}
                    value={this.state.term}
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapActionsToProps(dispatch){
    return bindActionCreators(() => ({type: ''}), dispatch);
}

function mapStateToProps(){
    return {};
}

export default connect(mapStateToProps, mapActionsToProps)(SearchBar);
