import React, {FC, useEffect, useState} from 'react';
import {Button, Form, Input, Row, Card, notification} from "antd";
import useTypedSelector from "../hooks/useAppSelector";
import {useActions} from "../hooks/useActions";

const Login: FC = () => {
    const {login, setError} = useActions();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {isLoading, error} = useTypedSelector(state => state.users);

    const submit = () => {
        login(username, password);
    }

    useEffect(() => {
        if (error) {
            notification.open({
                message: 'Ошибка входа',
                description: error
            })
        }
        setError('');
    }, [error])

    return (
        <Row className="wrapper" justify="center" align="middle">
            <Card className="card-width" title="Вход" bordered={false}>
                <Form onFinish={submit}>
                    <Form.Item label="Введите логин">
                        <Input value={username} onChange={(e) => setUsername(e.target.value)} name="username"
                               placeholder="login"/>
                    </Form.Item>
                    <Form.Item label="Введите пароль">
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} name="password"
                               placeholder="qwerty123"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={isLoading}>Вход</Button>
                    </Form.Item>
                </Form>
            </Card>
        </Row>
    );
};

export default Login;