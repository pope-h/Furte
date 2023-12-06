import { Link } from 'react-router-dom'
import { background } from '../assets/images'

const SignUp = () => {

  return (
    <div className="text-white-400 h-[100vh] flex justify-center items-center bg-cover" style={{ backgroundImage: `url(${background})` }}
    >
        <div>
            <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
                <h1 className='text-4xl text-white-400 font-bold text-center mb-6'>Sign Up</h1>
                <form>
                    <div className='relative my-6'>
                        <input type='email' className='block w-72 py-2 px-0 text-sm text-white-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-coral-red focus:outline-none focus:ring-0 focus:text-white-400 focus:border-coral-red peer' placeholder='' />
                        <label htmlFor='email' className='absolute text-sm text-white-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-coral-red peer-focus:dark:text-coral-red peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'>Your Username</label>
                        <i className='bx bxs-user absolute top-4 right-4'></i>
                    </div>
                    <div className='relative my-6'>
                        <input type='password' className='block w-72 py-2 px-0 text-sm text-white-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-coral-red focus:outline-none focus:ring-0 focus:text-white-400 focus:border-coral-red peer' placeholder='' />
                        <label htmlFor='email' className='absolute text-sm text-white-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-coral-red peer-focus:dark:text-coral-red peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'>Your Email</label>
                        <i className='bx bxs-envelope absolute top-4 right-4'></i>
                    </div>
                    <div className='relative my-6'>
                        <input type='password' className='block w-72 py-2 px-0 text-sm text-white-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-coral-red focus:outline-none focus:ring-0 focus:text-white-400 focus:border-coral-red peer' placeholder='' />
                        <label htmlFor='email' className='absolute text-sm text-white-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-coral-red peer-focus:dark:text-coral-red peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'>Your Password</label>
                        <i className='bx bxs-lock-alt absolute top-4 right-4'></i>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' name='' id='' />
                            <label htmlFor='Remember Me'>I agree not to terms & conditions.</label>
                        </div>
                    </div>
                    <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-coral-red text-white-400 hover:bg-white-400 hover:text-coral-red py-2 transition-colors duration-300' type='submit'>Sign In</button>
                    <div>
                        <span className='m-4'>Already have an account? <Link className='text-coral-red hover:no-underline hover:text-rose-600' to="/signin">Sign In</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp