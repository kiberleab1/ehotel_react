import React from 'react'
import Menu from './Menu'
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import Login from './Login';

export const PublicLayout = (props) =>
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Login} />
        </Switch>
  
    </div>