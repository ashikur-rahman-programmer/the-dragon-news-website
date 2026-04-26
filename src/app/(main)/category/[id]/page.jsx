import LeftSideBar from "@/components/homePage/news/LeftSideBar";
import NewsCard from "@/components/homePage/news/NewsCard";
import RightSideBar from "@/components/homePage/news/RightSideBar";
import { allCategories, allCategoriesNews } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const categories = await allCategories();
  const category = categories.find((c) => c.category_id === id);
  return {
    title: `${category ? category.category_name : "Category"} - Dragon News`,
    description: `Latest news in the ${category ? category.category_name : "selected"} category.`,
  };
};

const CategoryNews = async ({ params }) => {
  const { id } = await params;
  const categories = await allCategories();
  const news = await allCategoriesNews(id);
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-3 space-y-3">
        <h2 className="text-xl font-semibold ">All Categories</h2>
        <LeftSideBar categories={categories} activeId={id} />
      </div>
      <div className="lg:col-span-6 ">
        <h2 className="text-xl font-semibold mb-4">Dragon News Home</h2>
        {news.length > 0 ? (
          news.map((n, index) => <NewsCard key={index} news={n} />)
        ) : (
          <h2 className="font-bold text-4xl text-center my-7">
            No news found in this category
          </h2>
        )}
      </div>
      <div className="lg:col-span-3 ">
        <RightSideBar />
      </div>
    </div>
  );
};

export default CategoryNews;
