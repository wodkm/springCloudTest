import React, { Component } from 'react';
import SemanticTest from '@components/testModule/SemanticTest.jsx';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.q  qweqwe</p>
                <SemanticTest></SemanticTest>
            </div>
        );
    }
}

module.exports = App;