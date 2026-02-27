import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="text-xl font-bold text-blue-600">
          Ledger Pro
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg text-slate-600 focus-within:ring-2 focus-within:ring-blue-300 transition">
            <FiSearch className="text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-40"
            />
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            <Link to="/add-customer">Add Customer</Link>
            
          </button>
        </div>
      </nav>

    </div>
  );
};