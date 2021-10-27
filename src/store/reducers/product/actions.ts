import {
    IProduct,
    ProductActionEnum,
    SetSelectedProductAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetProductAction
} from "./types";
import {AppDispatch} from "../../index";
import {api} from "../../../http/api";

export const productActions = {
    setError: (error: string): SetErrorAction => ({type: ProductActionEnum.SET_ERROR, payload: error}),
    setIsLoading: (loading: boolean): SetIsLoadingAction => ({
        type: ProductActionEnum.SET_IS_LOADING,
        payload: loading
    }),
    setProduct: (product: IProduct[]): SetProductAction => ({type: ProductActionEnum.SET_PRODUCT, payload: product}),
    setSelectedProduct: (product: IProduct): SetSelectedProductAction => ({
        type: ProductActionEnum.SET_SELECTED_PRODUCT,
        payload: product
    }),
    fetchAllProduct: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(productActions.setIsLoading(true));
            const response = await api.get<IProduct[]>('/products');
            dispatch(productActions.setProduct(response.data));
            dispatch(productActions.setIsLoading(false));
        } catch (e) {
            dispatch(productActions.setError('Попробуйте обновить страницу!'));
        }
    },
    fetchProduct: (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(productActions.setIsLoading(true));
            const response = await api.get<IProduct>('/products/' + id);
            dispatch(productActions.setSelectedProduct(response.data));
            dispatch(productActions.setIsLoading(false));
        } catch (e) {
            dispatch(productActions.setError('Попробуйте обновить страницу!'));
        }
    }

}