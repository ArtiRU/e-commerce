import React, {FC, useEffect} from 'react';
import {Button, Col, Descriptions, notification, Row, Spin} from 'antd';
import {useActions} from "../hooks/useActions";
import useTypedSelector from "../hooks/useAppSelector";
import {useHistory, useParams} from 'react-router-dom';
import {LoadingOutlined} from '@ant-design/icons';
import {routes} from "../routes";

interface IRouteParams {
    id: string,
}

const Product: FC = () => {
    const params = useParams<IRouteParams>();
    const history = useHistory();
    const {fetchProduct, setError, setCart} = useActions()
    const {selectedProduct, isLoading, error} = useTypedSelector(state => state.products);
    const {isAuth} = useTypedSelector(state => state.users);

    const antIcon = <LoadingOutlined style={{fontSize: 234}} spin/>;

    const addToCart = () => {
        if(isAuth) {
            setCart([{...selectedProduct}]);
            history.push(routes.CART);
        } else {
            notification.open({
                message: 'Пройдите регистрацию',
                description: 'Чтобы добавить в корзину нужно зарегистриоваться'
            })
        }
    }

    useEffect(() => {
        fetchProduct(params.id);

        if (error) {
            notification.open({
                message: 'Ошибка страницы',
                description: error
            })
        }
        setError('');
    }, [error]);

    return (
        <div>
            {
                isLoading ?
                    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate: (-50%,-50%)'}}>
                        <Spin indicator={antIcon}/>
                    </div>
                    :
                    <Row className="flex-container">
                        <Col span={4}>
                            <img className="card-image" src={selectedProduct.image} alt={selectedProduct.image}/>
                        </Col>
                        <Col span={12}>
                            <Descriptions title={selectedProduct.title} bordered layout="vertical"
                                          column={{xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1}}>
                                <Descriptions.Item label="Категория">{selectedProduct.category}</Descriptions.Item>
                                <Descriptions.Item label="Цена,$">{selectedProduct.price}</Descriptions.Item>
                                <Descriptions.Item
                                    label="Описание товара">{selectedProduct.description}</Descriptions.Item>
                            </Descriptions>
                        </Col>
                    </Row>
            }
            <Row>
                <Button onClick={addToCart}>Добавить в корзину</Button>
            </Row>
        </div>
    );
};

export default Product;