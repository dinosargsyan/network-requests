import { Component,createContext } from 'react';
import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import Posts from 'containers/Posts/Posts';
import {BrowserRouter, Route, Router,Switch} from 'react-router-dom';
import HomePage from 'components/HomePage/HomePage';
import PostDetails from 'components/PostDetails/PostDetails';
import Error404 from 'utils/Error404';
import './App.css';
import Auth from 'containers/Auth/Auth';
import AppContextProvider from 'context/AppContextProvider';
import Profile from 'containers/Auth/Profile/Profile';


 export class App extends Component{
   

  render(){
  return (
    <div>
      <AppContextProvider>
      
      <BrowserRouter>
      <Header/>
       <Layout>
         <Switch>
         <Route exact path= "/posts" component={Posts} />
         <Route exact path="/posts/:postId" component={PostDetails}/>
         <Route exact path="/" component={HomePage} />
         <Route exact path="/auth" component={Auth} />
         <Route exact path="/profile" component={Profile} />
         <Route component={Error404} />
         </Switch>
       </Layout>
       </BrowserRouter>
       </AppContextProvider>
    </div>
  );
}
}

export default App;
