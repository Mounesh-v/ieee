import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
