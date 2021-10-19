import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Doctors from './components/Doctors/Doctors';
import Appointment from './components/Appointment/Appointment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/UserAuth/Login/Login';
import Signup from './components/UserAuth/SignUp/Signup';
import Care from './components/Care/Care';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Services from './components/Home/Services/Services';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/service/care/:careID">
              <Care></Care>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
