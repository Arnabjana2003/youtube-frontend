import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  const links = [
    { name: "Home", to: "/" },
    { name: "Create", to: "/uploadvideo" },
    { name: "Subscripsions", to: "/subscriptions" },
    { name: "Profile", to: "/profile" },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 border z-10 bg-white">
      <div className="w-full p-2 sm:p-3 md:p-4 flex justify-between">
        {links.map((link) => (
          <NavLink to={link.to} className={({isActive})=>isActive?"border-b-2 border-b-slate-500":null}>{link.name}</NavLink>
        ))}
      </div>
    </div>
  );
}

export default Menu;
