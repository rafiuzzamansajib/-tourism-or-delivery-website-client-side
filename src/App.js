import './App.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

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
  </Switch>
  </BrowserRouter>
 </AuthProvider>
  );
}

export default App;
