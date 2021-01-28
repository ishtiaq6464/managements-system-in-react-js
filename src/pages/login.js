import React from 'react';
import { Form, Input, Button } from 'antd';
import Roules from '../util/rules';
import { login } from '../middleware/auth';
import './login.css';

const Login = props => {

    // LOGIN SUCCESS
    const onFinish = values => {
        console.log('Success:', values);
        login(props, values);
    };

    // LOGIN FAILED
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="container f-c-t">
         {/* <Layout className="app-login" isHeader={false} isNavigation={false}> */}
            <Form className="w-sm-l"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
            >
                <Form.Item
                    name="username"
                    type="text"
                    rules={Roules.text}

                >
                    <Input placeholder="Username" autoComplete='off' />
                </Form.Item>
                <Form.Item
                    name="password"
                    type="password"
                    rules={Roules.password}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item >
                    <Button className="btn btn-primary" htmlType="submit">
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
<div>
                <form className="w-sm-l" name="basic" initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="text" name="username" class="form-control" />
  </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" name="password" class="form-control" />
  </div>
        
                                <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>



        {/* </Layout> */}
        </div>

    );
};

export default Login;