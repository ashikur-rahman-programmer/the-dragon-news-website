import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-20">
        404 - Page Not Found
      </h1>
      <Link
        href="/"
        className="text-blue-500 hover:underline block text-center mt-4"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
