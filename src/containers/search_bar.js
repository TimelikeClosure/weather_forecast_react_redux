"use strict";
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    render(){
        return (
            <form className="input-group">
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
