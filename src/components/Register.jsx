import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';


export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()
  async function onSubmit(data) {
    try {
      const response = await axios.post("http://localhost:8000/api/admin/register", data)
      toast.success("You registered successfully");
      navigate("/login")
    } catch (error) {
      const message =
        error.response?.data?.message || "Registration failed";

      toast.error(message);
    }

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>

        {/* Name Field */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required", maxLength: { value: 20, message: "Max 20 chars" } })}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
            })}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="flex flex-col">
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 chars" },
              maxLength: { value: 15, message: "Max 15 chars" },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/,
                message: "Password must include upper, lower, number & special char",
              },
            })}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition-all duration-200"
        >
          Register
        </button>
        <Link to="/login">
          <p className="text-center text-sm text-blue-500 hover:underline">Already have an account? Login</p>
        </Link>
      </form>
    </div>
  );
};