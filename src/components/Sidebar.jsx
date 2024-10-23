const Sidebar = ({ recipeQueue }) => {
  console.log(recipeQueue);
  return <div className="md:w-1/3">Want to Cock: {recipeQueue.length}</div>;
};

export default Sidebar;
