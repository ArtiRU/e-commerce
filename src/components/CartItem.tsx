import React, {FC} from 'react';
import { Row} from "antd";
import {DeleteOutlined} from '@ant-design/icons';
import {useActions} from "../hooks/useActions";

interface CartProductProps {
    id: number,
    image: string,
    title: string,
    price: number,
}

const CartItem: FC<CartProductProps> = ({id,image, title, price}) => {
    const {removeCart} = useActions();
    return (
        <div className="cart-content">
            <Row style={{flexBasis: "55%"}}>
                <img
                    className="cart-img"
                    src={image}
                    alt={image}
                    width={60}/>
                <div className="cart-text">{title}, <span className="cart-price">{price}$</span></div>
            </Row>
            <Row>
                <DeleteOutlined className="close-icon cart-cancel" onClick={() => removeCart(id)}/>
            </Row>
        </div>
    );
};

export default CartItem;