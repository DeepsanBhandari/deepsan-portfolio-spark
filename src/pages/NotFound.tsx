
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="w-full max-w-lg glass rounded-2xl p-12 text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-2xl text-zinc-800 mb-8">Oops! Page not found</p>
        <p className="text-zinc-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <ArrowLeft size={18} />
          <span>Return to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
