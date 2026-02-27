import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";

export const AddCustomer = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function onSubmit(data) {
        try {
            console.log(data, "added cust");

            const response = await axios.post("http://localhost:8000/api/customer/add-customer", data)
            toast.success("Customer Added successfully");
            navigate("/dashboard")
        } catch (error) {
            const message = error.response?.data?.message || "Failed to add Customer";
            toast.error(message);
        }

    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-4"
            >
                <h2 className="text-2xl font-semibold text-center mb-4">Add Customer</h2>

                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: "Name is required", minLength: { value: 3, message: "Min 3 char" }, maxLength: { value: 20, message: "Max 20 chars" } })}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Phone Number"
                        {...register("phoneNumber", {
                            required: "Phone Number is required",
                            pattern: { value: /^[0-9]{10}$/, message: "Invalid Phone Number" },
                        })}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition-all duration-200"
                >
                    Add
                </button>
                <Link to="/dashboard">
                    <p className="text-center text-sm text-blue-500 hover:underline">Back to Dashboard</p>
                </Link>

            </form>
        </div>
    )
}
