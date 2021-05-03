import React, { Component } from "react";

class Register extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      Firstname:"",
      Lastname:"",
       Email:"",
       citizenId:"",
       DOB:"",
       Phone:"",
       Gender:"",
       password:""
    }
  }

  render() {
    return (
      <div class="hold-transition register-page">
        <div className="register-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h1">
                <b>Voyage</b>Safety
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Register a new membership</p>
              <form>
                <div className="input-group mb-3">
                  <input onChange={e=>this.setState({Email: e.target.value})}
                    type="text"
                    className="form-control"
                    placeholder="Firstname"
                    name="Firstname"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input onChange={e=>this.setState({Lastname: e.target.value})}
                    type="text"
                    className="form-control"
                    placeholder="Lastname"
                    name="Lastname"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input onChange={e=>this.setState({Email: e.target.value})}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    namee="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input onChange={e=>this.setState({citizenId: e.target.value})}
                    type="text"
                    className="form-control"
                    placeholder="CitizenId"
                    name="citizenId"
                  />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-check" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <div
                    className="input-group date"
                    id="reservationdate"
                    data-target-input="nearest"
                  >
                    <input onChange={e=>this.setState({DOB: e.target.value})}
                      type="text"
                      className="form-control datetimepicker-input"
                      data-target="#reservationdate"
                      placeholder="Date of Birth"
                    />
                    <div
                      className="input-group-append"
                      data-target="#reservationdate"
                      data-toggle="datetimepicker"
                    >
                      <div className="input-group-text">
                        <i className="fa fa-calendar" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input onChange={e=>this.setState({Phone: e.target.value})}
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    name="phone"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-phone" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <select onChange={e=>this.setState({Gender: e.target.value})}
                    className="form-control select2bs4"
                    style={{ width: "100%" }}
                    name="gender"
                  >
                    <option selected="selected" value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="input-group mb-3">
                  <input onChange={e=>this.setState({password: e.target.value})}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Retype password"
                    name="Retypepassword"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="terms"
                        defaultValue="agree"
                      />
                      <label htmlFor="agreeTerms">
                        I agree to the <a href="#">terms</a>
                      </label>
                    </div>
                  </div>
                  <span>#Debug{JSON.stringify(this.state)}</span>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <button
                onClick={() => this.props.history.goBack()}
                class="btn btn-block btn-outline-primary btn-sm"
                style={{ margin: 8 }}
              >
                I already have a membership
              </button>
            </div>
            {/* /.form-box */}
          </div>
          {/* /.card */}
        </div>
      </div>
    );
  }
}

export default Register;
