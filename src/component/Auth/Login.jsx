import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  // Move the useState hooks inside the component
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail('');
    setPassword('');
  };
  

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-400 p-20">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-400 text-xl py-4 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-400 text-xl py-4 px-6 rounded-full placeholder:text-gray-400 mt-5"
            type="password"
            placeholder="Enter password"
          />
          <button
            className="text-white outline-none hover:bg-emerald-500 bg-emerald-700 font-semibold text-xl py-2 px-8 w-full rounded-full mt-5"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
