import {combineReducers} from 'redux'
import users from './users';
import products from './product';
import cart from './cart'

const rootReducer = combineReducers({
    users,
    products,
    cart
});

export default rootReducer;