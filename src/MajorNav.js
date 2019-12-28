import React, { Component } from 'react';
import './App.css';
import arrow from './img/arrow.png';
// import list from './img/list.png';
import refresh from './img/refresh.png';
import View from './View.js';
import styles from './majorNav.css';

function SizeDropDown(props) {
    return (
        <div className="size-dropdown">
            <a href="#"> {props.size} </a>
        </div>
    )
}
function MajorNav() {
    return (
        <div className="main-container">
            <hr></hr>
            <div className="search-bar">
                <div className="left">
                    <span> Search fonts</span>
                </div>
                <div className="middle">
                    <span> | Type something</span>
                </div>
                <div className="right">
                    <div className="size-dropdown">
                        <span> 32px </span>
                        <img src={arrow} /> 
                        {/* <SizeDropDown size="20px" />
                        <SizeDropDown size="25px" />
                        <SizeDropDown size="30px" />
                        <SizeDropDown size="35px" /> */}
                    </div>
                    <div className="color">
                        <div className="dark-mode">
                        </div>
                        <div className="normal-mode">
                        </div>
                    </div>
                    {/* <div className="grid" onClick={this.ClickList}>
                        <img src={list} />
                    </div> */}
                    <View />
                    <div className="refresh">
                        <img src={refresh} />
                    </div>
                </div>
            </div> 
         </div>
    )
}

export default MajorNav;