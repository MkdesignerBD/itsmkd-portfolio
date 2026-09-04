import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] grid place-items-center px-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <Link to="/" className="inline-block mt-5 underline opacity-90">
          Go Home
        </Link>
      </div>
    </div>
  );
}
