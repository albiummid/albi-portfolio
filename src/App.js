import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Shared/Navbar/Navbar';
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/">

        </Route>
        <Route path="/">

        </Route> */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="*">

        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
