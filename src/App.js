import logo from './logo.svg';
import './App.css';
import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import Posts from 'containers/Posts/Posts';

function App() {
  return (
    <div>
      <Header/>
       <Layout>
        <Posts />
       </Layout>
    </div>
  );
}

export default App;
