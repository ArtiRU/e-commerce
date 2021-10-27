import React from 'react'
import Home from '../pages/Home'
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Product from "../pages/Product";


export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum routes {
    LOGIN = '/login',
    HOME = '/',
    CART = '/cart',
    PRODUCT = '/product',
}

export const publicRoutes: IRoute[] = [
    {path: routes.HOME, component: Home, exact: true},
    {path: routes.LOGIN, component: Login, exact: true},
    {path: routes.PRODUCT + '/:id', component: Product, exact: true},
]

export const privateRoutes: IRoute[] = [
    {path: routes.HOME, component: Home, exact: true},
    {path: routes.CART, component: Cart, exact: true},
    {path: routes.PRODUCT + '/:id', component: Product, exact: true},
]