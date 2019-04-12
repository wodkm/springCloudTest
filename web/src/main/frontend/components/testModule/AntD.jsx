import React, { Component } from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
// import '@stylesheets/testModule/testModule.scss';
import 'antd/dist/antd.css';

class testForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form>
                <Form.Item
                    label="Name"
                    required={false}
                >
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    label="Name"
                    required={false}
                >
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    label="Name"
                    required={false}
                >
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    label="E-mail"
                    required={true}
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
            </Form>
        );
    }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'test_form' })(testForm);

export default class AntD extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(Form.getFieldDecorator);
        return (
            <div style={{ padding: '0 100px' }}>
                <WrappedHorizontalLoginForm />
            </div>
        );
    }
}

module.exports = AntD;