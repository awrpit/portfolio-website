function Header() {
  return (
    <>
      <div className="text-black flex flex-column px-3 py-6 justify-between border-r-3">
        <a
          className="text-xl font-bold px-2 hover:text-slate-700 bg-gradient-to-bl from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text "
          href="/"
        >
          AS
        </a>
        <ul className="flex flex-column">
          <li className="text-l font-bold px-4  hover:text-slate-700 bg-gradient-to-bl from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text ">
            <a href="/"> Resume </a>
          </li>
          <li className="text-l font-bold px-4 hover:text-slate-700 bg-gradient-to-bl from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text ">
            <a href="/projects"> Projects</a>
          </li>
          <li className="text-l font-bold px-4  hover:text-slate-700 bg-gradient-to-bl from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text ">
            <a href="/musings"> Musings</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
