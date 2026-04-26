"use client";
import { Label, ListBox, ListLayout, Virtualizer } from "@heroui/react";

const CategoriesCard = ({ categories }) => {
  return (
    <div>
      <Virtualizer layout={ListLayout} layoutOptions={{ rowHeight: 50 }}>
        <ListBox
          aria-label="Virtualized list with 1000 items"
          // className="h-[400px] w-[300px] overflow-y-auto"
          items={categories}
        >
          {categories.map((category) => (
            <ListBox.Item
              key={category.category_id}
              textValue={category.category_name}
            >
              <div className="flex flex-col">
                <Label>{category.category_name}</Label>
              </div>
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Virtualizer>
    </div>
  );
};

export default CategoriesCard;
