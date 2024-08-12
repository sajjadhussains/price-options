import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-yellow-200 p-6 text-black">
      <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <IoMdMenu></IoMdMenu>
        )}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static ${
          open ? "top-16" : "-top-60"
        } bg-yellow-200 px-6`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
