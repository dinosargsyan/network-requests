import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import Posts from 'containers/Posts/Posts';
import {BrowserRouter, Route, Router,Switch} from 'react-router-dom';
import HomePage from 'components/HomePage/HomePage';
import PostDetails from 'components/PostDetails/PostDetails';
import Error404 from 'utils/Error404';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
       <Layout>
         <Switch>
         <Route exact path= "/posts" component={Posts} />
         <Route exact path="/posts/:postId" component={PostDetails}/>
         <Route exact path="/" component={HomePage} />
         <Route component={Error404} />
         </Switch>
       </Layout>
       </BrowserRouter>
    </div>
  );
}

export default App;
