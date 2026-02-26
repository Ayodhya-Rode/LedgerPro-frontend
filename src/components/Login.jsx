import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';


export const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const response = await axios.post("http://localhost:8000/api/admin/login", data,{ withCredentials: true })
      toast.success("You Login successfully");
    } catch (error) {
      const message =
        error.response?.data?.message || "Login failed";

      console.log("error to login", error);
      toast.error(message);
    }

  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-4">

        <h1 className="text-2xl font-semibold text-center mb-2">
          Login
        </h1>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition-all duration-200"
        >
          Login
        </button>
        <Link to="/register">
          <p className="text-center text-sm text-blue-500 hover:underline">No account yet? Register</p>
        </Link>
      </form>
    </div>
  );
}

