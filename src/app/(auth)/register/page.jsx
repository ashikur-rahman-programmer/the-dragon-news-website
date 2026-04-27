"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
// export const metadata = {
//   title: "Register - Dragon News",
//   description:
//     "Create a new Dragon News account and stay updated with the latest news.",
// };
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { name, photoUrl, email, password } = data;
    const { data: user, error } = await authClient.signUp.email({
      name: name,
      photoUrl: photoUrl,
      email: email,
      password: password,
      callbackURL: "/",
    });
    if (error) {
      alert("Registration failed: " + error.message);
      return;
    }
    if (user) {
      alert(
        "Registration successful! Please check your email to verify your account.",
      );
    }
    console.log(user, error);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#F3F3F3] p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-sm">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#403F3F] mb-6">
            Register your account
          </h2>
          <hr className="border-gray-200 mb-8" />
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
          <div>
            <label className="block text-base font-bold text-[#403F3F] mb-2">
              Your Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-[#F3F3F3] border-none outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
          <div>
            <label className="block text-base font-bold text-[#403F3F] mb-2">
              Photo URL
            </label>
            <input
              type="text"
              {...register("photoUrl", { required: "Photo URL is required" })}
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 bg-[#F3F3F3] border-none outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
