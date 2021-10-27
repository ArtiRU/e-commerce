import React, {FC} from 'react';
import {Col, Layout, Menu, Row} from "antd";
import {useHistory} from 'react-router-dom';
import {routes} from "../routes";
import useTypedSelector from '../hooks/useAppSelector';
import {useActions} from "../hooks/useActions";

const NavBar: FC = () => {
    const {logout} = useActions()
    const {isAuth, user} = useTypedSelector(state => state.users);
    const history = useHistory();

    const handleLogin = () => {
        if (isAuth) {
            logout();
            history.push(routes.HOME);
        } else {
            history.push(routes.LOGIN)
        }

    }

    return (
        <Layout.Header className="header">
            <Row>
                <Col span={12}>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item key={1} onClick={() => history.push(routes.HOME)}>На главную</Menu.Item>
                    </Menu>
                </Col>
                <Col className="flex-end" span={12}>
                    <Row>
                        <Col span={20}>
                            <Row justify="end">
                                {isAuth && <div className="username">{user.name?.firstname}</div>}
                            </Row>

                        </Col>
                        <Col span={4}>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item key={1}
                                           onClick={handleLogin}>{isAuth ? 'Выйти' : 'Войти'}</Menu.Item>
                                <Menu.Item key={2} onClick={() => history.push(routes.CART)}>Корзина</Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout.Header>
    );
};

export default NavBar;