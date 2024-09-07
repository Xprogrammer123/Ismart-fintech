import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {/* Button to open the modal */}
      <button
        onClick={toggleModal}
        className="px-4 py-2 border border-custom-color text-custom-color rounded-md font-semibold"
      >
        Sign In/Up
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6 mt-3">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-2 py-1 ${isLogin ? 'bg-custom-color text-text-color' : 'text-custom-color border border-custom-color'} rounded-md font-bold`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-2 py-1 ${!isLogin ? ' bg-custom-color text-text-color' : 'text-custom-color border border-custom-color'} rounded-md font-bold`}
              >
                Sign Up
              </button>
              <button
                onClick={toggleModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                <IoMdClose className='text-xl '/>
              </button>
            </div>

            {/* Modal Content */}
            {isLogin ? (
              <div>
                <h2 className="text-2xl font-bold mb-4 ">Sign In</h2>
                <form>
                <div className="mb-4">
                  
                  <input
                    type="text"
                    id="loginEmail"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-color focus:border-custom-color sm:text-sm"
                    required
                    placeholder='Username'
                  />
                </div>
                  <div className="mb-4">
                  
                    <input
                      type="email"
                      id="loginEmail"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-color focus:border-custom-color sm:text-sm"
                      required
                      placeholder='Email'
                    />
                  </div>
                  <div className="mb-4">
                    
                    <input
                      type="password"
                      id="loginPassword"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-color focus:border-custom-color sm:text-sm"
                      required
                      placeholder='Password'
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-custom-color text-white rounded-full shadow-xl mb-4"
                  >
                    Sign In
                  </button>
                </form>
                <div class="flex items-center justify-center space-x-2 mb-4">
  <span>---</span>
  <span>with</span>
  <span>---</span>
</div>

<div className="flex items-center justify-center space-x-5 text-2xl hover:shadow-2xl">

<a href=""><FcGoogle/></a> 
<a href=""> <FaFacebook className='text-blue-600'/></a>
<a href=""> <FaApple /></a>
</div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form>
                  <div className="mb-4">
                  <div className="mb-4">
                   
                    <input
                      type="text"
                      id="signupUsername"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-color focus:border-custom-color sm:text-sm"
                      required
                      placeholder='Username'
                    />
                  </div>
                  
                    <input
                      type="email"
                      id="signupEmail"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-color focus:border-custom-color sm:text-sm"
                      required
                      placeholder='Email'
                    />
                  </div>
                  <div className="mb-4">
                 
                    <input
                      type="number"
                      id="signupNumber"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-color focus:border-custom-color sm:text-sm"
                      required
                      placeholder='Phone'
                    />
                  </div>
                  <div className="mb-4">
                  
                   <select name="" id="" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-color focus:border-custom-color sm:text-sm'>
                    <option value="">account</option>
                    <option value="">account</option>
                    <option value="">account</option>
                   </select>
                  </div>
                  <div className="mb-4">
                  
                    <input
                      type="password"
                      id="signupPassword"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-color focus:border-custom-color sm:text-sm"
                      required
                      placeholder='Password'
                    />
                  </div>
                  <div className="mb-4">
                  
                    <input
                      type="password"
                      id="signupConfirmPassword"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-color focus:border-custom-color sm:text-sm"
                      required
                      placeholder='Confirm Password'
                    />
                  </div>

                  <div className='mb-4'>
               
						<input
							type="text"
							placeholder="Referral Code"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-color focus:border-custom-color sm:text-sm"
               required
						/>
					</div>
          <Link to="/Mainpagein">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-custom-color text-white rounded-full shadow-xl mb-4"
                  >
                      Sign Up
                  </button>
                  </Link>
                </form>
                <div class="flex items-center justify-center space-x-2 mb-4">
  <span>---</span>
  <span>with</span>
  <span>---</span>
</div>

<div className="flex items-center justify-center space-x-5 text-2xl">

<a href=""><FcGoogle/></a> 
<a href=""> <FaFacebook className='text-blue-600'/></a>
<a href=""> <FaApple /></a>
</div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
