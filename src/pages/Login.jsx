import React from 'react';

const Login = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#B027F5" }}
    >

      <div className="row w-100 justify-content-center">
        <div className="col-11 col-sm-8 col-md-6 col-lg-4">

          <div className="card p-4 p-md-5 shadow">

            
            <div className="text-center mb-4" style={{ color: "#6A1B9A" }}>
              <h2>LOGIN</h2>
            </div>

           
            <div className="mb-3" style={{ color: "#6A1B9A" }}>
              <label htmlFor="fname">Username</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="name@gmail.com"
              />
            </div>

            
            <div className="mb-3" style={{ color: "#6A1B9A" }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="password"
              />
            </div>

          
            <div className="text-center mt-3">
              <button
                className="btn text-light rounded-3 px-4 w-100"
                style={{ backgroundColor: "#B027F5" }}
              >
                Submit
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;