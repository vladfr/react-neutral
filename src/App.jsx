import { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Login from './components/Login'
import Index from './components/Index'

import Auth from './lib/Auth'
const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

import { Route, Switch, Link, Redirect } from 'react-router-dom'

const MainLayout = props => (
  <div>
    <h1>Main Layout</h1>
    {props.children}
  </div>
)

const SingleFormLayout = props => (
  <div>
    <p>single form</p>
    {props.children}
  </div>
)

const SessionRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    false ? (
      <Redirect to="/"/>
    ) : (
    <Layout>
      <Component {...props} />
    </Layout>
    )
  )} />
)

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} {...rest} />
    </Layout>
  )} />
)

export default class App extends Component {
  state = {
    name: 'react'
  };

  render() {
    return (
      <div className="App text-center">

        <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <a className="btn btn-primary" href="#">Sign In</a>
          </div>
        </nav>

        <header className="masthead text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="email" className="form-control form-control-lg" placeholder="Enter your email..."/>
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>

        <Switch>
          <AppRoute exact path="/" layout={MainLayout} auth={auth} component={Index} />
          <SessionRoute exact path="/login" layout={SingleFormLayout} auth={auth} component={Login} />
        </Switch>

        <footer className="footer bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item">
                    <a href="#">About</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="#">Contact</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="#">Terms of Use</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
                <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2018. All Rights Reserved.</p>
              </div>
              <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-3">
                    <a href="#">
                      <i className="fa fa-facebook fa-2x fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-3">
                    <a href="#">
                      <i className="fa fa-twitter fa-2x fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-instagram fa-2x fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}
