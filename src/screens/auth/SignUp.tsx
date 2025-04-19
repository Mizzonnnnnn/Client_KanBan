import { Button, Card, Form, Input, message, Space, Typography } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './components/SocialLogin';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../redux/reducers/authReducer';
import { registerUser } from '../../services/authService';

const { Title, Paragraph, Text } = Typography;
interface userData {
    name: string, email: string, password: string
}

const SignUp = () => {
    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = async (values: userData) => {
        setIsLoading(true)

        try {
            const res: any = await registerUser(values)
            if (res && res.data) {
                if (res.EC === 0) {
                    form.resetFields();
                    dispatch(addAuth(res.data))
                    message.success(res.message);
                }
            }
        } catch (error: any) {
            message.error(error?.message);
        } finally {
            setIsLoading(false)
        }
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
                    <Title level={2} >Create an account</Title>
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
                        validateTrigger="onSubmit"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your name!!!"
                            },
                            {
                                min: 5,
                                message: "Username must be minimum 5 characters."
                            }
                        ]}>
                        <Input allowClear maxLength={100} type='text' placeholder={"Enter your name"} />
                    </Form.Item>

                    <Form.Item
                        name={"email"}
                        label="Email"
                        validateTrigger="onSubmit"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your email!!!"
                            },
                            () => ({
                                validator(_, value) {
                                    if (!value) {
                                        return Promise.resolve();
                                    }
                                    if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value)) {
                                        return Promise.reject("Enter a valid email")
                                    }
                                    return Promise.resolve();
                                },
                            })
                        ]}>
                        <Input allowClear maxLength={100} type='email' placeholder={"Enter your email address"} />
                    </Form.Item>

                    <Form.Item
                        name={"password"}
                        label="Password"
                        validateTrigger="onSubmit"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your password!!!"
                            },
                            () => ({
                                validator(_, value) {
                                    if (!value) {
                                        return Promise.resolve();
                                    }

                                    if (value.length < 6) {
                                        return Promise.reject("Mật khẩu phải dài hơn 6 kí tự.")
                                    }

                                    return Promise.resolve();
                                }
                            })
                        ]}>
                        <Input.Password allowClear maxLength={100} placeholder={"Enter your password"} />
                    </Form.Item>

                </Form>

                <div className="mt-4 mb-3">
                    <Button
                        loading={isLoading}
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

                <SocialLogin/>

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