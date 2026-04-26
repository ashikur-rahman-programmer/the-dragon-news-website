export const allCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
};

export const allCategoriesNews = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`,
  );
  const data = await res.json();
  return data.data;
};

export const fetchNewsDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );
  const data = await res.json();
  return data.data[0];
};
