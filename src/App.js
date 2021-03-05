/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import pages from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <pages.Login />
        </Route>
        <Route path="/">
          <pages.Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
