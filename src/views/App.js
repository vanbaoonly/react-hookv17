import '../styles/App.scss';

import Navigation from "./navigation/Navigation";
import Home from './Home/Home';
import Todo from './Todo/Todo';
import User from './User/User';
import AddUser from './User/add';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './Blog/Blo';
function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/adduser">
              <AddUser />
            </Route>

          </Switch>

          {/* <div className='container'> <User /></div> */}

        </header>

      </div>
    </BrowserRouter>
  );
}

export default App;
