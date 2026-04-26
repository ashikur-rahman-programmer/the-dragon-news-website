import { Spinner } from "@heroui/react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Spinner size="xl" />
      <p className="text-lg font-semibold text-gray-600">Loading...</p>
    </div>
  );
};

export default LoadingPage;
