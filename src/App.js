import { Component, createContext } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import Posts from 'containers/Posts/Posts';
import HomePage from 'components/HomePage/HomePage';
import PostDetails from 'components/PostDetails/PostDetails';
import TodoDetails from 'components/TodoDetails/TodoDetails';
import Error404 from 'utils/Error404';
import Auth from 'containers/Auth/Auth';
import AppContextProvider from 'context/AppContextProvider';
import Profile from 'containers/Auth/Profile/Profile';
import { store } from 'reducers';

import './App.css';
import Todos from 'containers/Todos/Todos';


export class App extends Component {


  render() {
    return (
      <div>
        <Provider store={store}>
          <AppContextProvider>
            <BrowserRouter>
              <Header />
              <Layout>
                <Switch>
                  <Route exact path="/posts" component={Posts} />
                  <Route exact path="/posts/:postId" component={PostDetails} />
                  <Route exact path="/todos" component={Todos} />
                  <Route exact path="/todos/:todoId" component={TodoDetails} />
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/auth" component={Auth} />
                  <Route exact path="/profile" component={Profile} />
                  <Route component={Error404} />
                </Switch>
              </Layout>
            </BrowserRouter>
          </AppContextProvider>
        </Provider>
      </div>
    );
  }
}

export default App;
