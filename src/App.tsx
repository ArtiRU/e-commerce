import React, {FC, useEffect} from 'react';
import './styles/index.css';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Layout} from "antd";
import {useActions} from "./hooks/useActions";
import {IUser} from "./store/reducers/users/types";
import {ICart} from "./store/reducers/cart/types";

const App: FC = () => {
    const {setIsAuth, setUser, setCart} = useActions();

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setUser({name: {firstname: localStorage.getItem('firstname' || '')}} as IUser);
            setIsAuth(true);
            setCart(JSON.parse(localStorage.getItem('cart') as string) || []);
        }
    }, [setIsAuth, setUser])

    return (
        <>
            <Layout className="layout">
                <NavBar/>
                <Layout.Content className="content">
                    <div className="site-layout-content">
                        <AppRouter/>
                    </div>
                </Layout.Content>
            </Layout>
        </>
    );
}

export default App;
