import React from 'react'
import {Route, Switch} from 'react-router-dom';

import BlankPage from 'components/BlankPage/BlankPage';
import Todos from 'containers/Todos/Todos';
import Page404 from 'components/Page404/Page404'
import CreatePage from 'containers/CreatePage/CreatePage';

const AppRouter = () => {
    return (
            <Switch>
                <Route exact path='/' component={BlankPage}/>
                <Route exact path='/todo-list' component={Todos}/>
                <Route exact path='/todo-create' component={CreatePage}/>
                <Route path='*' component={Page404}/>
            </Switch>
    )
}

export default AppRouter
