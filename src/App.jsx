import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const App = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "One Punch",
    "One Punch",
  ]);
  // const onAddCategory = (newCategory) => {
  //   setCategories([newCategory, ...categories])
  // }

  return (
    <>
      <h1>App Giphy</h1>
      <AddCategory setCategories={setCategories}/>

      {/* <button onClick={() => onAddCategory('Pokemon')}>Add</button> */}
      <ol>
        {categories.map((category, i) => {
          return <li key={i}>{category}</li>;
        })}
      </ol>
    </>
  );
};
