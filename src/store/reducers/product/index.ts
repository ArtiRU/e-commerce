import {IProduct, ProductAction, ProductActionEnum, ProductState} from "./types";

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: '',
    selectedProduct: {} as IProduct
};
const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case ProductActionEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case ProductActionEnum.SET_PRODUCT:
            return {...state, products: action.payload}
        case ProductActionEnum.SET_SELECTED_PRODUCT:
            return {...state, selectedProduct: action.payload}
        default:
            return state;
    }
}

export default productReducer;