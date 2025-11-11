import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-extrabold text-blue-700 mb-4">404</h1>
      <p className="text-slate-600 text-lg mb-6">The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;


