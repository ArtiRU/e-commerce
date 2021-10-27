import React, {FC, useEffect} from 'react';
import CardItem from "../components/CardItem";
import {useActions} from "../hooks/useActions";
import useTypedSelector from "../hooks/useAppSelector";

const Home: FC = () => {
    const {fetchAllProduct} = useActions();
    const {products, isLoading} = useTypedSelector(state => state.products);

    useEffect(() => {
        fetchAllProduct();
    }, [])

    return (
        <div className="card-wrapper">
            {
                products.map(product => <CardItem key={product.id} {...product} isLoading={isLoading}/>)
            }
        </div>
    );
};

export default Home;