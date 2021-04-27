import React from 'react'
import {Route, Switch} from 'react-router-dom';

import HomePage from 'containers/HomePage/HomePage';
import Todos from 'containers/Todos/Todos';
import Page404 from 'components/Page404/Page404'
import CreatePage from 'containers/CreatePage/CreatePage';

const AppRouter = () => {
    return (
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/todo-list' component={Todos}/>
                <Route exact path='/todo-create' component={CreatePage}/>
                <Route path='*' component={Page404}/>
            </Switch>
    )
}

export default AppRouter
