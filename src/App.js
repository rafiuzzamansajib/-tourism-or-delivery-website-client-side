import './App.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Addpackage from './components/Addpackage/Addpackage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import Orderplace from './components/Orderplace/Orderplace';
import ManageOrders from './components/ManageOrders/ManageOrders';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/package/:packageId">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/addpackage">
            <Addpackage></Addpackage>
          </PrivateRoute>
          <PrivateRoute path="/orderplace">
            <Orderplace></Orderplace>
          </PrivateRoute>
          <PrivateRoute path="/manageorders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>  
      </Switch>
  </BrowserRouter>
 </AuthProvider>
  );
}

export default App;
