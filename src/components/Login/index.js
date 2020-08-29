import React, { Component } from "react";

import { withRouter, Link } from "react-router-dom";

import { login, userData } from "../../authentication/auth";

import api from "../../services/api";

class Login extends Component {
  state = {
    userData: {},
    email: "",
    password: "",
  };

  handleSubmitForm = async (values) => {
    values.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha  e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/authenticate", { email, password });
        login(response.data.token);
        userData(JSON.stringify(response.data.userData));
        return this.props.history.push("/");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T",
        });
      }
    }
  };
  render() {
    const { userData } = this.state;
    console.log(userData);

    return (
      <main
        role="main"
        style={{ marginTop: "200px" }}
        className="col-md-9 ml-sm-auto col-lg-10 px-md-4"
      >
        <form method="POST" action="/" onSubmit={this.handleSubmitForm}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              aria-describedby="passwordHelp"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div className="form-group">
            <Link to="/register">Criar conta grátis</Link>
          </div>
        </form>
      </main>
    );
  }
}
export default withRouter(Login);
