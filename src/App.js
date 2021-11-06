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
import Vaccinationstatus from "./components/vaccinationstatus/vaccinationstatus";
import Forgetpassword from "./components/forgetpassword/forgetpassword";
import Resetpassword from "./components/resetpassword/resetpassword";
import Confirmbooking from "./components/confirmbooking/confirmbooking";
import Viewstaff from "./components/viewstaff/viewstaff";
import Thanksforbooking from "./components/thanksforbooking/thanksforbooking";
import Editestabilishment from "./components/editestabilishment/editestabilishment";
import Myestablishment from "./components/myestablishment/myestablishment";

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
          <SecuredRoute path="/establishdetail" component={Establishdetail} />  
          <SecuredRoute path="/dashboard" component={Dashboard}/>
          <SecuredRoute path="/profile" component={Profile}/>
          <SecuredRoute path="/addstore" component={Addstore}/>
          <Route path="/verify/:email/:key" component={Verify}/>
          <SecuredRoute path="/vaccinationstatus" component={Vaccinationstatus}/>
          <Route path="/forgetpassword" component={Forgetpassword} />
          <SecuredRoute path="/confirmbooking/:date" component={Confirmbooking} />
          <SecuredRoute path="/thanksforbooking" component={Thanksforbooking} />
          <Route path="/resetpassword/:key" component={Resetpassword} />
          <SecuredRoute path="/viewstaff/:EstId" component={Viewstaff} />
        {/* <Route path="/*" component={this.redirectToLogin} />   */}
        <Route path="/myestablishment" component={Myestablishment}/>
        <Route path="/editestabilishment/" component={Editestabilishment}/>
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