export interface ICart {
    id: number,
    image: string,
    title: string,
    price: number,
}


export interface CartState {
    cart: ICart[],
}

export enum CartActionEnum {
    SET_CART_ITEM = 'SET_CART_ITEM',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
}

export interface SetCartAction {
    type: CartActionEnum.SET_CART_ITEM,
    payload: ICart[],
}

export interface RemoveCartItemAction {
    type: CartActionEnum.REMOVE_CART_ITEM,
    payload: number,
}

export type CartAction =
    SetCartAction |
    RemoveCartItemAction;


