"use strict";
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class SearchBar extends Component {
    render(){
        return (<div></div>);
    }
}

function mapActionsToProps(dispatch){
    return bindActionCreators(SearchBar, dispatch);
}

function mapStateToProps(){
    return {};
}

export default connect(mapStateToProps, mapActionsToProps)(SearchBar);
