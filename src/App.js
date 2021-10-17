import './App.css';
import Menubar from './components/Shared/Menubar/Menubar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Menubar></Menubar>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
