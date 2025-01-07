import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin';

const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = (value: { email: string, password: string }) => {
        console.log(">>> Check value: ", value)
    }


    return (
        <>
            <Card
                style={{
                    width: '336px',
                }}
            >
                <div className='text-center'>
                    <img
                        className='mb-3'
                        src={"https://www.dropbox.com/scl/fi/m0z7iuwmcrt8oij9gyxec/kanban.png?rlkey=xxs5zhn7gcuwbga387vlrrfl1&st=3cpxi77a&raw=1"} alt="logo"
                        style={{
                            width: "60px",
                            height: "60px"
                        }}
                    />
                    <Title level={2}>Create an account</Title>
                    <Paragraph type='secondary'>
                        Start yout 30-day free trial.
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
                        name={"name"}
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your Name!!!"
                            }
                        ]}>
                        <Input allowClear maxLength={100} type='text' placeholder={"Enter your name"} />
                    </Form.Item>

                    <Form.Item
                        name={"email"}
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your email!!!"
                            }
                        ]}>
                        <Input allowClear maxLength={100} type='email' placeholder={"Enter your email"} />
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
                        <Input.Password allowClear maxLength={100} placeholder={"Enter your password"} />
                    </Form.Item>
                </Form>



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
                        <Text>Already have an account?</Text>
                        <Link to={"/login"}>Login</Link>
                    </Space>
                </div>
            </Card>
        </>
    );
};

export default SignUp;