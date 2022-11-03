import React, { useState } from "react";
import { toast } from "react-toastify";
import { Db } from './Components/API'
import Cookies from 'js-cookie'


export function Login() {
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  const SignIn = async(e) => {
    e.preventDefault();
    const res = await fetch(`${ Db }/login/${user}/${pass}`);
    const data = await res.json();
    console.log(data);

    if (data.msg === "Ok") {
      Cookies.set("Session", user);
      window.location.reload();
    } else {
      setError(data.msg);
      toast(error, { type: "error" });
    }
  };

  return (
    <>
      <div className="text-center py-5">
        <main className="form-signin w-50 m-auto">
          <form onSubmit={SignIn}>
          <img src= "Gym.png" className="img-fluid" alt="Image not found"/>
            <h1 className="h3 mb-3 fw-normal">Always In Shape Gym</h1>

            <div className="form-floating">
            <input
            type="text"
            onChange={(e) => setUser(e.target.value)}
            className="form-control"
            placeholder="User"
            autoFocus
          />
              <br />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating">

            <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
              <br />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-dark">
              Sign in
            </button>
        
          </form>
        </main>
      </div>
    </>
  );
}