import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function LandingPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Manage Your Daily Business Ledger Without Confusion
          </h2>

          <p className="text-lg text-slate-600 mb-8">
            Track customers, udhari, payments and profit — all in one simple dashboard.
          </p>

          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-md">
            <Link to="/register">
              Create Free Account
            </Link>
          </button>

          <p className="text-sm text-slate-500 mt-4">
            No setup fees. Start in less than 60 seconds.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
          <h3 className="font-semibold mb-6 text-slate-700">
            Business Overview
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-slate-500">Total Customers</p>
              <p className="text-xl font-bold">18</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-slate-500">Outstanding</p>
              <p className="text-xl font-bold text-red-600">₹5,400</p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Rahul Traders</span>
              <span className="text-red-600 font-semibold">₹2,500</span>
            </div>

            <div className="flex justify-between">
              <span>Sharma Store</span>
              <span className="text-green-600 font-semibold">₹1,200</span>
            </div>

            <div className="flex justify-between">
              <span>Patel Mart</span>
              <span className="text-red-600 font-semibold">₹900</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">
            Still Managing Accounts in Notebook?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-slate-50 rounded-xl">
              ❌ Lost payment records
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              ❌ Confusion in credit tracking
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              ❌ No proper customer history
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              ❌ Manual calculation mistakes
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">
            Ledger Pro Makes It Simple
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-3">Add Customers</h4>
              <p className="text-slate-600">
                Quickly add and manage all your business customers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-3">Track Credit & Debit</h4>
              <p className="text-slate-600">
                Record payments and track outstanding balances easily.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-3">View Profit Summary</h4>
              <p className="text-slate-600">
                See your daily and monthly business performance instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-14 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>

          <h3 className="text-4xl font-bold mb-6 leading-snug">
            Stop Managing Accounts in Chaos.
          </h3>

          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Track customers, payments and outstanding balances in one simple dashboard.
            Clear records. Better control. Less stress.
          </p>

          <button className="bg-white text-blue-700 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-100 transition shadow-lg">
            Start Using Ledger Pro
          </button>

          <p className="text-sm text-blue-200 mt-6">
            No complicated setup. Start in minutes.
          </p>

        </div>
      </section>

      <Footer/>

    </div>
  );
}