import React, {FC} from 'react';
import {Button, Col, Row, Card} from "antd";
import {Skeleton} from 'antd';
import {useHistory} from 'react-router-dom';
import {IProduct} from "../store/reducers/product/types";
import {routes} from "../routes";

const CardItem: FC<IProduct> = ({id, title, image, price, isLoading}) => {
    const history = useHistory();

    return (
        <Skeleton loading={isLoading}>
            <Row className="card-item">
                <Col span={4}>
                    <Card className="card" title={title} hoverable>
                        <img className="card-image"
                            src={image}
                            alt={image}
                        />
                        <p>Цена: {price}$</p>
                        <Button className="card-button"
                                onClick={() => history.push(routes.PRODUCT + '/' + id)}>Перейти</Button>
                    </Card>
                </Col>
            </Row>
        </Skeleton>
    );
};

export default CardItem;