import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CheckOut from './Components/CheckOut/CheckOut';
import Footer from './Components/Footer/Footer';
import Admin from './Pages/Admin/Admin';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Orders from './Components/Orders/Orders';
import Deals from './Components/Deals/Deals';
import NotFound from './Components/NotFound/NotFound';

// user context
export const UserContext = createContext();
// flowersData
export const flowersContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [flowersInformation, setFlowersInformation] = useState([]);
  return (
    <flowersContext.Provider value={[flowersInformation, setFlowersInformation]}>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <PrivateRoute path='/admin'>
                <Admin/>
            </PrivateRoute>
            <PrivateRoute path='/checkout/:id'>
              <CheckOut/>
            </PrivateRoute>
            <PrivateRoute path='/orders'>
                <Orders/>
            </PrivateRoute>
            <Route path='/deals'>
              <Deals/>
            </Route>
            <Route path='*' component={NotFound}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </UserContext.Provider>
    </flowersContext.Provider>
    
  )
}

export default App  
