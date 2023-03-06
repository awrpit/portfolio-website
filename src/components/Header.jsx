function Header() {
  return (
    <>
      <div className="text-black flex flex-column px-6 py-6 justify-between border-r-3">
        <a className="text-xl font-bold px-4 hover:text-slate-700" href="/">
          Arpit Sharma
        </a>
        <ul className="flex flex-column">
          <li className="text-l font-bold px-4  hover:text-slate-700">
            <a href="/"> Resume </a>
          </li>
          <li className="text-l font-bold px-4 hover:text-slate-700 ">
            <a href="/projects"> Projects</a>
          </li>
          <li className="text-l font-bold px-4  hover:text-slate-700">
            <a href="/musings"> Musings</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
