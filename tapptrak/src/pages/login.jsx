import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'Admin'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically make an API call to verify credentials
    // For now, we'll just simulate a successful login
    if (formData.role === 'Admin') {
      navigate('/admin');
    } else {
      navigate('/guard');
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fcfa] group/design-root overflow-x-hidden"
         style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7f3ec] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e1b13]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em]">Tapptrak</h2>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] py-5 flex-1">
            <h2 className="text-[#0e1b13] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">LOGIN</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 px-4">
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="username"
                    placeholder="Username"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b13] focus:outline-0 focus:ring-0 border-none bg-[#e7f3ec] focus:border-none h-14 placeholder:text-[#4e976b] p-4 text-base font-normal leading-normal"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b13] focus:outline-0 focus:ring-0 border-none bg-[#e7f3ec] focus:border-none h-14 placeholder:text-[#4e976b] p-4 text-base font-normal leading-normal"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="flex px-4 py-3">
                <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#e7f3ec] p-1">
                  <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-[#f8fcfa] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#0e1b13] text-[#4e976b] text-sm font-medium leading-normal">
                    <span className="truncate">Admin</span>
                    <input
                      type="radio"
                      name="role"
                      className="invisible w-0"
                      value="Admin"
                      checked={formData.role === 'Admin'}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-[#f8fcfa] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#0e1b13] text-[#4e976b] text-sm font-medium leading-normal">
                    <span className="truncate">Security</span>
                    <input
                      type="radio"
                      name="role"
                      className="invisible w-0"
                      value="Security"
                      checked={formData.role === 'Security'}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
              <div className="flex px-4 py-3">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#14b856] text-[#0e1b13] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Log in</span>
                </button>
              </div>
              <p className="text-[#4e976b] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
                Forgot password?
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
