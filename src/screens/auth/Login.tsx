import { Button, Card, Checkbox, Form, Input, message, Space, Typography } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../redux/reducers/authReducer';
import { localDataNames } from '../../constants/appInfos';
import SocialLogin from './components/SocialLogin';
import { loginBasic } from '../../services/authService';

const { Title, Paragraph, Text } = Typography;
interface userData {
    email: string,
    password: string
}

const Login = () => {
    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false);
    const [isRemember, setIsRemember] = useState(true);
    const dispatch = useDispatch();

    const handleLogin = async (values: userData) => {
        setIsLoading(true);
        try {
            const res: any = await loginBasic(values)
            message.success(res.message);
            res.data && dispatch(addAuth(res.data))

            if (isRemember) {
                localStorage.setItem(localDataNames.authData, JSON.stringify(res.data))
            }
        } catch (error: any) {
            message.error(error.message)
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <Card>
                <div className='text-center'>
                    <img
                        className='mb-3'
                        src={"https://www.dropbox.com/scl/fi/m0z7iuwmcrt8oij9gyxec/kanban.png?rlkey=xxs5zhn7gcuwbga387vlrrfl1&st=3cpxi77a&raw=1"} alt="logo"
                        style={{
                            width: "60px",
                            height: "60px"
                        }}
                    />
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
                        <Input allowClear maxLength={100} type='email' />
                    </Form.Item>

                    <Form.Item
                        name={"password"}
                        label="Password"
                        validateTrigger="onSubmit"
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
                        loading={isLoading}
                        onClick={() => form.submit()}
                    >
                        Sign in
                    </Button>
                </div>
                <SocialLogin isRemember={isRemember} />

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