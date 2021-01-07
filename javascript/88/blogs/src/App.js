import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Blogs from './Blogs';
import Header from './Header';
import Posts from './Posts';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/home' >
          <Blogs />
        </Route>
        <Route path='/blog/:blogId' >
          <Posts />
        </Route>
        <Redirect to='/home' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
