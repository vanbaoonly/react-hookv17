import '../styles/App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./navigation/Navigation";
import Home from './Home/Home';
import Todo from './Todo/Todo';
import User from './User/User';
import AddNewUser from './User/AddNewUser';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blog from './Blog/Blo';
import DetailUser from './User/DetailUser';
import NotFound404 from './notfound404/NotFound404';
import Searchytb from './Searchytb/Searchytb';
function App() {


  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navigation />
          </header>
          <div className='container-content'>

            <div className='content'>
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
                <Route path="/user" exact>
                  <User />
                </Route>
                <Route path="/user/:id">
                  <DetailUser />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/add-new-user">
                  <AddNewUser />
                </Route>
                <Route path="/search">
                  <Searchytb />
                </Route>
                <Route path="*">
                  <NotFound404 />
                </Route>
              </Switch>

            </div>
          </div>
        </div>

      </BrowserRouter>

      <ToastContainer
        autoClose={2000}
      />

    </>

  );
}

export default App;
