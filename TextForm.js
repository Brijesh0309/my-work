import React, { useState } from "react";

export default function TextForm(props) {

  const [isLogin, setIsLogin] = useState(true);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      user.name === "" ||
      user.email === "" ||
      user.password === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

    setUser({
      name: "",
      email: "",
      password: ""
    });

    setIsLogin(true);
  };

  const handleLogin = (e) => {

    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No Registered User Found");
      return;
    }

    if (
      savedUser.email === user.email &&
      savedUser.password === user.password
    ) {
      alert("Login Successful");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="row justify-content-center">

      <div className="col-md-6">

        <div className="card shadow p-4">

          <h2 className="text-center mb-4">{props.heading}</h2>

          <div className="text-center mb-3">

            <button
              className={`btn me-2 ${
                isLogin ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>

            <button
              className={`btn ${
                !isLogin ? "btn-success" : "btn-outline-success"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>

          </div>

          {isLogin ? (

            <form onSubmit={handleLogin}>

              <div className="mb-3">

                <label>Email</label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="mb-3">

                <label>Password</label>

                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />

              </div>

              <button className="btn btn-primary w-100">
                Login
              </button>

            </form>

          ) : (

            <form onSubmit={handleRegister}>

              <div className="mb-3">

                <label>Full Name</label>

                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="mb-3">

                <label>Email</label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="mb-3">

                <label>Password</label>

                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />

              </div>

              <button className="btn btn-success w-100">
                Register
              </button>

            </form>

          )}

        </div>

      </div>

    </div>
  );
}