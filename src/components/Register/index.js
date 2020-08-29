import React, { Component } from "react";

import { withRouter, Link } from "react-router-dom";

import api from "../../services/api";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: "",
  };

  handleSubmitForm = async (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    if (!name || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/register", { name, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta" });
      }
    }
  };
  render() {
    return (
      <main
        role="main"
        style={{ marginTop: "200px" }}
        className="col-md-9 ml-sm-auto col-lg-10 px-md-4"
      >
        <form method="POST" onSubmit={this.handleSubmitForm} action="/">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
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
              name="password"
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
            <Link to="/login">Fazer login</Link>
          </div>
        </form>
      </main>
    );
  }
}
export default withRouter(Register);
