import {CartAction, CartActionEnum, CartState} from "./types";


const initialState: CartState = {
    cart: []
}

const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case CartActionEnum.SET_CART_ITEM: {
            const item = state.cart.find(item => item.title === action.payload[0].title);
            if(item) {
                return state;
            }
            localStorage.setItem('cart', JSON.stringify([...state.cart, ...action.payload]));
            return {...state, cart: [...state.cart, ...action.payload]};
        }
        case CartActionEnum.REMOVE_CART_ITEM: {
            const items = JSON.parse(localStorage.getItem('cart') as string) || [];
            const filteredItems = items.filter((item: any) => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(filteredItems));
            return {...state, cart: filteredItems};
        }
        default:
            return state;
    }
}

export default cartReducer;