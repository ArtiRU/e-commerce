import {CartActionEnum, ICart, RemoveCartItemAction, SetCartAction} from "./types";

export const cartActions = {
    setCart: (payload: ICart[]): SetCartAction => ({type: CartActionEnum.SET_CART_ITEM, payload}),
    removeCart: (id: number): RemoveCartItemAction => ({type: CartActionEnum.REMOVE_CART_ITEM, payload: id}),
}