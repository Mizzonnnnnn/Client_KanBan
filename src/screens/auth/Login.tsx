import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin';

const { Title, Paragraph, Text } = Typography;

const Login = () => {

    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false);
    const [isRemember, setIsRemember] = useState(true);
    const handleLogin = (value: { email: string, password: string }) => {
        console.log(">>> Check value: ", value)
    }

    console.log("Check remember: ", isRemember);
    return (
        <>
            <Card

            >
                <div className='text-center'>
                    <Title level={2}>Log in to your account</Title>
                    <Paragraph type='secondary'>
                        Welcomt back! Please enter your details.
                    </Paragraph>
                </div>

                <Form
                    layout="vertical"
                    form={form}
                    onFinish={handleLogin}
                    disabled={isLoading}
                    size='large'
                >

                    <Form.Item
                        name={"email"}
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your email!!!"
                            }
                        ]}>
                        <Input allowClear maxLength={100} type='email' />
                    </Form.Item>

                    <Form.Item
                        name={"password"}
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your password!!!"
                            }
                        ]}>
                        <Input.Password allowClear maxLength={100} />
                    </Form.Item>
                </Form>

                <div className="row">
                    <div className="col-auto">
                        <Checkbox
                            checked={isRemember}
                            onChange={(e) => setIsRemember(e.target.checked)}
                        >
                            Remember for 30 days
                        </Checkbox>
                    </div>

                    <div className="col text-end">
                        <Link to={'/'}>Forget password</Link>
                    </div>
                </div>

                <div className="mt-4 mb-3">
                    <Button
                        type='primary'
                        style={{
                            width: "100%"
                        }}
                        size='large'
                        onClick={() => form.submit()}
                    >
                        Sign in
                    </Button>
                </div>

                <SocialLogin />

                <div className="mt-4 text-center">
                    <Space>
                        <Text> Don't have an account?</Text>
                        <Link to={"/sign-up"}>Sign up</Link>
                    </Space>
                </div>
            </Card>
        </>
    );
};

export default Login;