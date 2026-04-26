import LeftSideBar from "@/components/homePage/news/LeftSideBar";
import NewsCard from "@/components/homePage/news/NewsCard";
import RightSideBar from "@/components/homePage/news/RightSideBar";
import { allCategories, allCategoriesNews } from "@/lib/data";

export const metadata = {
  title: "Dragon News - Home",
  description: "Stay updated with the latest news from Dragon News.",
};

const HomePage = async () => {
  const categories = await allCategories();
  const news = await allCategoriesNews("01");

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4">
      <div className="col-span-3 space-y-3">
        <h2 className="text-xl font-semibold ">All Categories</h2>
        <LeftSideBar categories={categories} activeId={"01"} />
      </div>
      <div className="col-span-6 ">
        <h2 className="text-xl font-semibold mb-4">Dragon News Home</h2>
        {news.map((n, index) => (
          <NewsCard key={index} news={n} />
        ))}
      </div>
      <div className="col-span-3 ">
        <RightSideBar />
      </div>
    </div>
  );
};

export default HomePage;
