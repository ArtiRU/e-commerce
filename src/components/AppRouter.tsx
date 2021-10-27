import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes, routes} from '../routes';
import useTypedSelector from "../hooks/useAppSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.users);
    return (
        <Switch>
            {
                isAuth ?
                    privateRoutes.map(route => <Route path={route.path} component={route.component}
                                                      exact={route.exact} key={route.path}/>)
                    :
                    publicRoutes.map(route => <Route path={route.path} component={route.component}
                                                     exact={route.exact} key={route.path}/>)
            }
            <Redirect to={routes.HOME}/>
        </Switch>
    );
};

export default AppRouter;