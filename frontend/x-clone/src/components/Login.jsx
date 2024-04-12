const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=ais"
            alt="Logo"
            width={"180px"}
            className="ml-5"
          />
        </div>
        <div>
          <div className="my-5">
            <h1 className="font-bold text-5xl">Happening Now</h1>
          </div>
          <h1 className="mt-4 mb-2 text-2xl font-bold">Login</h1>
          <form className="flex flex-col w-[80%]">
            <input
              type="text"
              placeholder="Name"
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
            />
            <input
              type="text"
              placeholder="Username"
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
            />
            <input
              type="text"
              placeholder="Email"
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
            />
            <input
              type="text"
              placeholder="Password"
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
            />
            <button className="bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white">
              Login
            </button>
            <h1>
              Already have an account?
              <span className="font-bold text-blue-600 cursor-pointer">
                Login
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
