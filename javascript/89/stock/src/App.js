import './App.css';
import Title from './Title';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar';
import CompaniesList from './CompaniesList';
import CompanyInfo from './CompanyInfo';
import StockInfo from './StockInfo';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Title />
      <Navbar />
      <SearchBar />
      <Switch>
        <Route path='/' exact>
          <CompaniesList />
        </Route>
        <Route path='/company/:companyId'>
          <CompanyInfo />
          <StockInfo />
        </Route>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
/*
TODO:
  stock info:
    clear interval
    make stock info data also appear for first 5 seconds
    color and arrow (green/red & up/down)
*/