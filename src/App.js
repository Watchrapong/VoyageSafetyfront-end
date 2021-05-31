import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Home from "./components/home/home";
import Detail from "./components/detail/detail";
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

// const isLoggedIn = () => {
//   return localStorage.getItem(server.LOGIN_PASSED) == YES;
// };

// Protected Route
// const SecuredRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isLoggedIn() === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
// );

class App extends Component {

  // componentDidMount(){
  //   this.props.setApp(this)
  // }

  // redirectToLogin = () => {
  //   return <Redirect to="/login" />;
  // };

 

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route path="/home" component={Home} />
          <Route path="/detail/:EstId/" component={Detail} />
          <Route path="/establishdetail" component={Establishdetail} />
          {/* <Route path="/login" component={Login}/> */}
          {/* {isLoggedIn() && <Header />}
          {isLoggedIn() && <Menu />} */}
          {/* <switch> */}
          {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact={true} path="/" component={this.redirectToLogin} />
          <SecuredRoute path="/home" component={Home} />
          <Route path="/detail" component={Detail} /> */}
          {/* <Route path="/*" component={this.redirectToLogin} /> */}
          {/* <Route path="/error" component={error} /> */}
          {/* </switch> */}
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