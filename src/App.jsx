import { useState } from "react";

export const App = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "One Punch",
    "One Punch",
  ]);
  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>App Giphy</h1>
      <form action="onAddCategory"></form>

      <button onClick={() => onAddCategory('Pokemon')}>Add</button>
      <ol>
        {categories.map((category, i) => {
          return <li key={i}>{category}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
