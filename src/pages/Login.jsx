import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96'>
        <p>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment</p>
        {
          state === "Sign Up" && <div className='w-full'></div>
        }
        <div>
          <p>Full Name</p>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
          <p>Email</p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div>
          <p>Password</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'type="submit">{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        <p onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}>
          {state === 'Sign Up' ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </form>
  );
};

export default Login;
