import React from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../config/Appwrite';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      console.log("Logged out successfully.");
      navigate('/'); // Redirect to login or home page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Welcome to User Dashboard
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
