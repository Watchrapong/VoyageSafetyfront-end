import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";

import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Home from "./components/home/home";
import Detail from "./components/detail/detail";
import Header2 from "./components/header2/header2";
import Addstore from "./components/addstore/addstore";
import Verify from "./components/verify/verify"
import { server, YES} from "./constants";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import error from "./components/error/error";
import { setApp } from "./actions/app.action"
import { connect } from "react-redux";
import Establishdetail from "./components/establishdetail/establishdetail";
import Welcome from "./components/welcome/welcome";
import Dashboard from "./components/dashboard/dashboard";
import Profile from "./components/profile/profile";
// import Addstore from "./components/addstore";

const isLoggedIn = () => {
  return localStorage.getItem(server.LOGIN_PASSED) === YES;
};

// Protected Route
const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = { account: '' }
  // }

 componentDidMount(){
    this.props.setApp(this)
  }

  redirectToLogin = () => {
    return <Redirect to="/login" />;
  };

 

  render() {
    return (
      <Router>
        <div>      
          {(isLoggedIn() && <Header />)||<Header2 />}    
          {/* <Route path="/"  component={Welcome}/> 
          <Route path="/home" component={Home} /> 
          <Route path="/detail/:EstId/" component={Detail} />
          <Route path="/establishdetail" component={Establishdetail} /> 
          <Route path="/login" component={Login}/> */}
          
          {/* {isLoggedIn() && <Header />}
          {isLoggedIn() && <Menu />} */}
          <Switch>
          <Route exact path="/">
    <Redirect to="/index" />
</Route>
          <Route path="/index"  component={Welcome}/> 
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> 
          
           {/* <Route exact={true} path="/" component={this.redirectToLogin} />  */}
          <SecuredRoute path="/home" component={Home} />
          <SecuredRoute path="/detail/:EstId/" component={Detail} />
          <Route path="/establishdetail" component={Establishdetail} />  
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/addstore" component={Addstore}/>
          <Route path="/verify/:key" component={Verify}/> 
          {/* <Route path="/addstore" component={Addstore} /> */}
        {/* <Route path="/*" component={this.redirectToLogin} />   */}
            {/* <Route path="/error" component={error} /> */}
          </Switch>  
          {/* {isLoggedIn() && <Footer />} */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  setApp
}

export default connect(mapStateToProps,mapDispatchToProps)(App)