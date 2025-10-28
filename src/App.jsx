import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const App = () => {
  const [categories, setCategories] = useState([
    "One Punch",
  ]);
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  };

  return (
    <>
      <h1>App Giphy</h1>
      <AddCategory onNewCategory={onAddCategory} />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
