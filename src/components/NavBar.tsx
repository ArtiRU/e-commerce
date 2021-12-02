import React, {FC} from 'react';
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
        <header className="header">
            <nav className="nav">
                <div onClick={() => history.push(routes.HOME)}>На главную</div>
                <ul className="list">
                    {isAuth && <div className="username">{user.name?.firstname}</div>}
                    <li onClick={handleLogin}>{isAuth ? 'Выйти' : 'Войти'}</li>
                    <li onClick={() => history.push(routes.CART)}>Корзина</li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;