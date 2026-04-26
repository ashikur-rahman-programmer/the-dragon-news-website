import LeftSideBar from "@/components/homePage/news/LeftSideBar";
import NewsCard from "@/components/homePage/news/NewsCard";
import RightSideBar from "@/components/homePage/news/RightSideBar";

const allCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
};
const allCategoriesNews = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`,
  );
  const data = await res.json();
  return data.data;
};

const CategoryNews = async ({ params }) => {
  const { id } = await params;
  const categories = await allCategories();
  const news = await allCategoriesNews(id);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4">
      <div className="col-span-3 space-y-3">
        <h2 className="text-xl font-semibold ">All Categories</h2>
        <LeftSideBar categories={categories} activeId={id} />
      </div>
      <div className="col-span-6 ">
        <h2 className="text-xl font-semibold mb-4">Dragon News Home</h2>
        {news.length > 0 ? (
          news.map((n, index) => <NewsCard key={index} news={n} />)
        ) : (
          <h2 className="font-bold text-4xl text-center my-7">
            No news found in this category
          </h2>
        )}
      </div>
      <div className="col-span-3 ">
        <RightSideBar />
      </div>
    </div>
  );
};

export default CategoryNews;
