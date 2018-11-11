import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';

import NotFoundPage from '../components/NotFoundPage';

import LoginPage from '../components/LoginPage'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;


// FIREBASE_API_KEY = AIzaSyBLv5tSdKbdAKfnETQuAaR
// FIREBASE_AUTH_DOMAIN = expensify - 406da.firebaseapp.com
// FIREBASE_DATABASE_URL = https://expensify-406da.firebaseio.com
// FIREBASE_PROJECT_ID = expensify - 406da
// FIREBASE_STORAGE_BUCKET = expensify - 406da.appspot.com
// FIREBASE_MESSAGING_SENDER_ID = 170413137627


