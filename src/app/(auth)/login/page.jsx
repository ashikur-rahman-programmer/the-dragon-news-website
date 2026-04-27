"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
// export const metadata = {
//   title: "Login - Dragon News",
//   description:
//     "Access your Dragon News account and stay updated with the latest news.",
// };
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log("Login data:", data);
    // Implement your login logic here, such as calling an API or validating credentials
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#F3F3F3] p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-sm">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#403F3F] mb-6">
            Login your account
          </h2>
          <hr className="border-gray-200 mb-8" />
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label className="block text-base font-bold text-[#403F3F] mb-2">
              Email address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-[#F3F3F3] border-none outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block text-base font-bold text-[#403F3F] mb-2">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-[#F3F3F3] border-none outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#403F3F] text-white py-3 font-bold hover:bg-[#333] transition-all"
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm">
          <p className="text-[#706F6F] font-semibold">
            Don't Have An Account?{" "}
            <Link href="/register" className="text-[#F34949] hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
