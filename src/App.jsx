import { useState } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import OurRecipes from './components/OurRecipes';
import Recipes from './components/Recipes';
import Sidebar from './components/Sidebar';

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState();

  const addRecipeToQueue = recipe => {
    const isExist = recipeQueue.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert('This Recipe already exists in the Queue');
    }
  };
  const handleRemove = id => {
    console.log('Find which recipe to remove');
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);
    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id);
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  };
  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our recipe section */}
      <OurRecipes></OurRecipes>
      {/* Recipe Cards Section */}
      <section className="flex flex-col md:flex-row gap-4">
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        <Sidebar
          handleRemove={handleRemove}
          recipeQueue={recipeQueue}
          preparedRecipe={preparedRecipe}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </div>
  );
};

export default App;
