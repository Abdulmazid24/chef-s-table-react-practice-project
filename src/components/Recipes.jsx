import { list } from 'postcss';
import { useEffect } from 'react';
import { useState } from 'react';

const Recipes = ({ addRecipeToQueue }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('recipe.json')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {recipes.map(recipe => (
          <div key={recipe.recipe_id} className="card bg-base-100 border-2">
            <figure className="px-8 pt-6">
              <img
                className="w-full md:h-44 rounded-xl "
                src={recipe.recipe_image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg text-gray-900 font-bold">
                {recipe.recipe_name}
              </h2>
              <p className="text-gray-700 text-xs font-medium">
                {recipe.short_description}
              </p>
              <h3 className=" font-bold ">
                Ingredients: {recipe.ingredients.length}
              </h3>

              <ul className="font-semibold text-xs list-disc text-gray-600 ml-8">
                {recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="flex gap-5 items-center font-medium">
                <div className="flex items-center gap-1 text-xs">
                  <i className="fa-regular fa-clock "></i>
                  <p>{recipe.preparing_time} min</p>
                </div>
                <div className="flex gap-1 items-center text-xs">
                  <i className="fa-solid fa-fire-flame-curved text-xl"></i>
                  <p>{recipe.calories} calories</p>
                </div>
              </div>
              <div className="card-actions">
                <button
                  onClick={() => addRecipeToQueue(recipe)}
                  className="px-4 py-1 bg-green-400 rounded-3xl font-bold border"
                >
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
