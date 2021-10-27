export interface IProduct {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    isLoading?: boolean,
}

export interface ProductState {
    products: IProduct[],
    isLoading: boolean,
    error: string,
    selectedProduct: IProduct,
}

export enum ProductActionEnum {
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_PRODUCT = 'SET_PRODUCT',
    SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT',
}

export interface SetProductAction {
    type: ProductActionEnum.SET_PRODUCT,
    payload: IProduct[],
}

export interface SetErrorAction {
    type: ProductActionEnum.SET_ERROR,
    payload: string,
}

export interface SetIsLoadingAction {
    type: ProductActionEnum.SET_IS_LOADING,
    payload: boolean,
}

export interface SetSelectedProductAction {
    type: ProductActionEnum.SET_SELECTED_PRODUCT,
    payload: IProduct,
}

export type ProductAction =
    SetProductAction |
    SetErrorAction |
    SetIsLoadingAction |
    SetSelectedProductAction;

