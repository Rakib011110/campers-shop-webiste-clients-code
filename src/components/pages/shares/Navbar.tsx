import { Link } from "react-router-dom";
import CartIndex from "../Carts/CartIndex";

const Navbar: React.FC = () => {
  return (
    <div className="navbar container mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/" className="hover:text-primary">
                Homepage
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost font-serif text-xl">
          CAPERS SHOPS
        </Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal font-serif text-lg px-1">
          <li>
            <Link to="/" className="hover:text-primary">
              Homepage
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-primary">
              Products
            </Link>
          </li>
          <li>
            <Link to="/products-management" className="hover:text-primary">
              Product Management
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-primary">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/my-cart"}>
          {" "}
          <CartIndex />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
