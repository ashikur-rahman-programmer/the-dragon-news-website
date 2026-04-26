import Image from "next/image"; // Next.js Image import
import React from "react";
import { FaRegBookmark, FaStar, FaShareAlt } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, rating, total_view } = news;

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm mb-6">
      {/* Header: Author Info */}
      <div className="flex items-center justify-between p-4 bg-[#F3F3F3]">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src={author?.img}
              alt={author?.name || "Author Image"}
              width={40}
              height={40}
              className="rounded-full object-cover border border-gray-200"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#403F3F]">{author?.name}</h4>
            <p className="text-xs text-[#706F6F]">
              {author?.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-gray-800" />
          <FaShareAlt className="cursor-pointer hover:text-gray-800" />
        </div>
      </div>

      {/* Title */}
      <div className="px-5 pt-4">
        <h2 className="text-xl font-bold text-[#403F3F] leading-7 mb-4 line-clamp-2">
          {title}
        </h2>
      </div>

      {/* Featured Image - Next.js Image Optimization */}
      <div className="px-5">
        <div className=" w-full">
          <Image
            src={image_url}
            alt={title}
            width={590}
            height={300}
            className="object-cover rounded-md w-full"
          />
        </div>
      </div>

      {/* Details */}
      <div className="p-5">
        <p className="text-[#706F6F] text-sm leading-6 line-clamp-4">
          {details}
        </p>
        <Link href={`/news/${news._id}`} className="block">
          <button className="mt-2 text-[#FF8C47] font-bold text-sm hover:underline">
            Read More
          </button>
        </Link>
      </div>

      <hr className="mx-5 border-gray-100" />

      {/* Footer */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <div className="flex text-[#FF8C47]">
            <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
            <FaStar className="opacity-30" />
          </div>
          <span className="text-sm font-semibold text-[#706F6F]">
            {rating?.number}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[#706F6F]">
          <AiOutlineEye size={20} />
          <span className="text-sm font-bold">{total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
