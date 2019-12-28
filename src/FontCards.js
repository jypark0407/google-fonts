import React, { Component } from 'react';
import './App.css';

import add from './img/add.png';

import styles from './FontCards.css';

const key  = "AIzaSyA-mIGLLbyKtD0c95pL0XiXAZ935Vu2kM0";
const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${key}`;

class FontCard extends Component {
    constructor() {
        super();
        this.state = {
            fonts: [],
            fontsFetched: [], // set number of fonts to load
        }
    }

componentDidMount() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let fonts = data.items; // array of fonts 
        let fonts_number = Math.min(10, data.items.length);
        const fontsFetched = [];
        for (let i=0; i < fonts_number; i++) {
            fontsFetched.push({
                fonts_name: fonts[i].family,
                id:i,
                font_url: 'https://fonts.googleapis.com/css?family='+ fonts[i].family.replace(/ /g, '+'),
                link: <link rel="stylesheet" href={'https://fonts.googleapis.com/css?family=' + fonts[i].family.replace(/ /g, '+')} key={[i]} />,
            });
        }
        this.setState( {fontsFetched : fontsFetched });
    });
}

render() {
    if(!this.state.fontsFetched[0]){
        return <div>Loading</div>;
    }
    // else {
    //     window.addEventListener("scroll", this.onScroll);
    //     const onScroll =>  () {
    //         if () {
    //             this.fetchMoreData();
    //         };
    return (
        <ul className="font-list-container">
            {this.state.fontsFetched.map(font => 
            <li className="font-list">
            { font.link }
            <div className="font-list-top">
                <div className="font-info">
                    <h3>{ font.fonts_name } </h3>
                </div>
                <div className="add-button">
                    <img src={add} />
                </div>
            </div>
                <div className="font-list-bottom">
                    <span className="font-sample" style={{fontFamily: font.fonts_name}}>
                        She stared through the window at the stars.
                    </span>
                </div>
            </li>
                )
            }
        </ul> 
    )
}
};
 
export default FontCard;