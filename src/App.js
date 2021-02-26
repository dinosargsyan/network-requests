import logo from './logo.svg';
import './App.css';
import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import Posts from 'containers/Posts/Posts';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import HomePage from 'components/HomePage/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
       <Layout>
         <Route exact path= "/posts" component={Posts} />
         <Route exact path="/" component={HomePage} />
       </Layout>
       </BrowserRouter>
    </div>
  );
}

export default App;
