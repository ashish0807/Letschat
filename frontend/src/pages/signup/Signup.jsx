import React from 'react'
import GenderCheckbox from './GenderCheckbox';

const Signup = () => {
  return (
  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

  <div className='w-full p-6 bg-blue-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100'>
  
  <h1 className='text-3x1 font-semibold text-center text-gray-200 '>Signup
  <span className='text-blue-500'> Letschat</span>
  </h1>
  
  <form>
      <div>
          <label className="label p-2">
              <span className='text-base label-text'>Full Name</span>
          </label>
          <input type="text" placeholder='Enter name' className='w-full input input-bordered h-10' id="" />
      </div>
  
      <div>
          <label className="label">
              <span className='text-base label-text'>Username</span>
          </label>
          <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' id="" />
      </div>

      <div>
            <label className="label">
                <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' id="" />
        </div>

        <div>
            <label className="label">
                <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="confirmpassword" placeholder='Enter password again' className='w-full input input-bordered h-10' id="" />
        </div>

        <GenderCheckbox/>

      <a href="#" className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block' >
          Already have an account?
      </a>
  
      <div>
          <button className='btn btn-block btn-sm mt-2'>Signup</button>
      </div>
  
  </form>
  </div>
  
  </div>

);
}

export default Signup
