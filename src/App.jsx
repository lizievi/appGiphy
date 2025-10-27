import { useState } from "react";

export const App = () => {
  const [categories, setCategories] = useState(['One Punch', 'One Punch', 'One Punch'])
  console.log(categories)
  return (
    <>
      {/* titulo */}
      <h1>App</h1>

      {/* input */}
      {/* Listado de gif */}
      <ol>
        {categories.map((category, i) => {
          return   <li key={i}>{category}</li>
        })}

      </ol>
      {/* Gif Item */}
    </>
  );
};
