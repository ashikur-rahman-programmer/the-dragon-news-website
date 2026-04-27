import { fetchNewsDetails } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const newsDetails = await fetchNewsDetails(id);

  return {
    title: newsDetails.title,
    description: newsDetails.details.substring(0, 160),
  };
};

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const newsDetails = await fetchNewsDetails(id);
  const { title, image_url, details, category_id } = newsDetails;

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white border border-gray-200 rounded-md p-6">
        <h2 className="text-2xl font-bold text-[#403F3F] mb-5">Dragon News</h2>

        {/* Featured Image */}

        <div className=" w-full">
          <Image
            src={image_url}
            alt={title}
            width={590}
            height={300}
            className="object-cover rounded-md w-full"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          <h1 className="text-2xl font-extrabold text-[#403F3F] leading-snug">
            {title}
          </h1>

          <p className="text-[#706F6F] text-base leading-7 text-justify">
            {details}
          </p>

          {/* Back Button */}
          <div className="pt-4">
            <Link href={`/category/${category_id}`}>
              <button className="flex items-center gap-2 bg-[#D72050] text-white px-6 py-3 rounded-none font-semibold hover:bg-[#b51b43] transition-colors">
                <FaArrowLeft /> All news in this category
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
