import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">AP</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black-500' }>
          About
        </NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black-500' }>
          Projects
        </NavLink>
        {/* Add LinkedIn profile link */}
        <a href="https://www.linkedin.com/in/arti-pal-b884b2249/" target="_blank" rel="noopener noreferrer" className="text-black-500 hover:text-blue-500">
          LinkedIn
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
