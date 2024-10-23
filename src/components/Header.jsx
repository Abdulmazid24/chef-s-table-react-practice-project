const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4">
      <h1 className="text-gray-800 font-bold text-3xl">Chef&apos;s Table</h1>
      <ul className="flex gap-6 text-gray-800 font-semibold text-base">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Recipes</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Search</a>
        </li>
      </ul>
      <div>
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="flex justify-between items-center relative"></div>
          <div className="bg-green-400 flex items-center justify-center rounded-full w-12 h-12">
            <i className="fa-regular fa-user-circle text-3xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
