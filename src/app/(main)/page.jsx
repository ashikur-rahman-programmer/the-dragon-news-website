import CategoriesCard from "@/components/shared/CategoriesCard";

const allCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
};

const HomePage = async () => {
  const categories = await allCategories();

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4">
      <div className="col-span-3 space-y-3">
        <h2 className="text-xl font-semibold ">All Categories</h2>
        {/* <ul> */}
        {/* <ListBox
        aria-label="Virtualized list with 1000 items"
        className="h-[400px] w-[300px] overflow-y-auto"
        items={users}
      ></ListBox>
          {categories.map((category) => (
              <ListBox.Item
              key={category.category_id}
              variant="ghost"
              className="p-4 my-2.5 bg-gray-200 text-xl font-medium rounded-lg "
            >
              {" "}
              {category.category_name}{" "}
             <ListBox.ItemIndicator />
          </ListBox.Item>
          ))}
        </ul> */}
        <CategoriesCard categories={categories} />
      </div>
      <div className="col-span-6 "></div>
      <div className="col-span-3 "></div>
    </div>
  );
};

export default HomePage;
