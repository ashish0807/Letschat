import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom'
import { useState } from 'react'; 
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  
    const [inputs,setInputs] = useState(
        {
            fullName: "",
            userName: "",
            password: "",
            confirmPassword: "",
            gender: "",
        }
    );

    const {loading, signup} = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs,gender});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await signup(inputs);
    };




  return (
  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

  <div className='w-full p-6 bg-blue-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100'>
  
  <h1 className='text-3x1 font-semibold text-center text-gray-200 '>Signup
  <span className='text-blue-500'> Letschat</span>
  </h1>
  
  <form onSubmit={handleSubmit}>
      <div>
          <label className="label p-2">
              <span className='text-base label-text'>Full Name</span>
          </label>

          <input type="text" 
          placeholder='Enter name' 
          className='w-full input input-bordered h-10' value={inputs.fullName}
          onChange={(e) => setInputs({...inputs,fullName:e.target.value})}/>
      </div>
  
      <div>
          <label className="label">
              <span className='text-base label-text'>Username</span>
          </label>

          <input type="text" 
          placeholder='Enter username' 
          className='w-full input input-bordered h-10' 
          value={inputs.userName}
          onChange={(e) => setInputs({...inputs,userName:e.target.value})} />
      </div>

      <div>
            <label className="label">
                <span className='text-base label-text'>Password</span>
            </label>

            <input type="password" 
            placeholder='Enter password' 
            className='w-full input input-bordered h-10' 
            value={inputs.password}
            onChange={(e) => setInputs({...inputs,password:e.target.value})} />
        </div>

        <div>
            <label className="label">
                <span className='text-base label-text'>Confirm Password</span>
            </label>

            <input type="password" 
            placeholder='Enter password again' 
            className='w-full input input-bordered h-10' 
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})} />
        </div>

        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

      <Link to={'/login'} className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block' >
          Already have an account?
      </Link>
  
      <div>
          <button className='btn btn-block btn-sm mt-2 border-slate-700' disabled={loading}>
            {loading? <span className='loading loading-spinner'></span>: "Sign Up"}
          </button>
      </div>
  
  </form>
  </div>
  
  </div>

);
}

export default Signup
