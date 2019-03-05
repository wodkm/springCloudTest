import React, { Component } from 'react';
import {
    Input
} from 'antd';
import '@stylesheets/testModule/testModule.scss';
import 'antd/dist/antd.css';

export default class AntD extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form">
                <h1>一个测试的表单大标题</h1>
                <h2>一个测试的表单小标题</h2>
                <div>
                    <Input />
                </div>
            </div>
        );
    }
}

module.exports = AntD;