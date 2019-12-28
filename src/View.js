import React, { Component } from 'react';
import './App.css';
import list from './img/list.png';

class View extends React.Component {
    handleClick = () => {
        alert("this is list view");
    };

    render() {
        return 
        <div className="grid" onClick={this.ClickList}>
            <img src={list} />
        </div>
    }
}

export default View;