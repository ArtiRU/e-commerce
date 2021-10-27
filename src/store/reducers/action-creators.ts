import {authActions} from "./users/actions";
import {productActions} from "./product/actions";
import {cartActions} from './cart/actions';

const allActionCreators = {
    ...authActions,
    ...productActions,
    ...cartActions,
}

export default allActionCreators;