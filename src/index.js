import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import './index.css';
import { store, history } from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Reduxtagram = () => (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={App}/>
          </Switch>
        </ConnectedRouter>
      </Provider>
);

ReactDOM.render(<Reduxtagram />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
