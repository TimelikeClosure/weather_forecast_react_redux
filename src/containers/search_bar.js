"use strict";
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class SearchBar extends Component {
    render(){
        return (
            <form className="input-group">
                <input />
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
