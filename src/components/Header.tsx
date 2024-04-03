const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="font-bold text-xl">Hello Shahrukh 👋,</h1>
      <input
        type="search"
        id="search"
        placeholder="search"
        className="px-2 rounded-md bg-white"
      />
    </header>
  );
};

export default Header;
