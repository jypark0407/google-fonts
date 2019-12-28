import React, { Component } from 'react';
import './App.css';
import styles from './minorNav.css';

function List(props) {
    return (
    <li> 
        <a href="#"> {props.menu} </a>
    </li>
    )
}

function MinorNav() {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <h1> <strong>Google</strong> Fonts </h1>
            </div>
            <ul className="nav-right">
                <List menu="CATALOG" />
                <List menu="FEATURED" />
                <List menu="ARTICLES" />
                <List menu="ABOUT" />
            </ul>
        </div>
        
    );
}

export default MinorNav;