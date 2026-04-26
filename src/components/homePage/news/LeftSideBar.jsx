"use client";
import { Label, ListBox, ListLayout, Virtualizer } from "@heroui/react";
import Link from "next/link";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li
          key={category.category_id}
          className={`py-2 mb-1 rounded-md text-center font-medium text-md hover:bg-gray-100 transition
            text-md ${
              activeId === category.category_id
                ? "bg-gray-200 font-semibold"
                : ""
            }  `}
        >
          <Link href={`/category/${category.category_id}`} className="block">
            {category.category_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LeftSideBar;
