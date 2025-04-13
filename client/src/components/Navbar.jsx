
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-md px-6 py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      
        <h1 className="text-3xl font-extrabold text-purple-600">
          SwasthVerify
        </h1>

        <div className="space-x-6 text-base font-medium">
          <Link
            to="/"
            className="text-white-600 font-extrabold text-xl hover:text-blue-600 "
          >
             Home
          </Link>
          <Link
            to="/about"
            className="text-white-600 font-extrabold text-xl hover:text-blue-600 "
          >
             About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


