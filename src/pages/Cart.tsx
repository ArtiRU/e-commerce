import {Button} from 'antd';
import React, {FC} from 'react';
import {CloseOutlined} from '@ant-design/icons';
import CartItem from "../components/CartItem";
import useTypedSelector from "../hooks/useAppSelector";
import {routes} from '../routes';
import {useHistory} from 'react-router-dom';

const Cart: FC = () => {
    const history = useHistory();
    const {cart} = useTypedSelector(state => state.cart);

    return (
        <div className="cart">
            <div className="cart-header">
                <div className="cart-title">Корзина</div>
                <CloseOutlined className="close-icon" onClick={() => history.push(routes.HOME)}/>
            </div>
            <div className="cart-body">
                {
                    !cart.length ? <div>Корзина пуста</div> : cart.map(product => <CartItem
                        key={product.id} {...product}/>)
                }
            </div>
            <div className="cart-footer">
                <div className="total">
                    <b>Всего: {cart.reduce((acc,cur) => {
                        return acc + cur.price
                    },0)}$</b>
                </div>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </div>

        </div>
    );
};

export default Cart;