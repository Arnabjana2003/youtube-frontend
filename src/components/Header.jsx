import React from "react";
import Logo from "./Logo.jsx"

function Header() {
  return (
    <>
      <header className="max-w-full overflow-hidden flex justify-between items-center p-2">
        <div className="font-bold text-red-500">
          <Logo/>
        </div>
        <div>
          <input className="border rounded-xl px-1 shadow-sm" type="text" placeholder="search" />
          <button className="ml-2"></button>
        </div>
      </header>
    </>
  );
}

export default Header;
