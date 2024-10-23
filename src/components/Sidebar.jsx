const Sidebar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculateTimeAndCalories,
  totalTime,
  totalCalories,
}) => {
  console.log(recipeQueue);
  return (
    <div className="md:w-1/3 border-2 rounded-xl text-gray-700 p-2 ">
      {/* Want to cook Table */}
      <div className="overflow-x-auto">
        <h2 className=" p-2 border-b-2 mx-auto font-bold                              text-gray-800 text-center">
          Want to Cook: {recipeQueue.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (
              <tr key={index} className="hover text-xs font-bold">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} min</td>
                <td>{recipe.Colories} calories</td>
                <td>
                  <div className="card-actions">
                    <button
                      onClick={() =>
                        handleRemove(
                          recipe.recipe_id,
                          calculateTimeAndCalories(
                            recipe.preparing_time,
                            recipe.calories
                          )
                        )
                      }
                      className=" text-xs px-2 py-1 bg-green-400 rounded-3xl font-bold border"
                    >
                      Preparing
                    </button>
                  </div>
                </td>
                <th></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Currently Cook Table */}
      <div className="overflow-x-auto mt-8">
        <h2 className=" p-2 border-b-2 mx-auto font-bold                              text-gray-800 text-center">
          Currently Cooking: {preparedRecipe.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, index) => (
              <tr key={index} className="hover text-xs font-bold">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} min</td>
                <td>{recipe.Colories} calories</td>
              </tr>
            ))}
            <tr className="border-none font-bold">
              <th></th>
              <td></td>
              <td>Total Time= {totalTime}</td>
              <td>Total calories={totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
