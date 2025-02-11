const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          MyWebsite
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/about" className="hover:text-blue-300">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;