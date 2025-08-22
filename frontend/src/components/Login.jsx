import { React, Fragment } from 'react';

export default function Login() {
  return (
    <Fragment>
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold">Be welcome back!</h1>
      </div>
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text py-1">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label ">
              <span className="label-text py-1">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-6 w-full">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </div>
      </div>
    </Fragment>
    );
}