import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex space-x-10 flex-row p-5 fixed top-0 z-100 rounded-b-3xl bg-primary shadow-lg text-secondary font-sans">
      <Link to="/" className="flex items-center font-semibold text-lg">WorldUniversity</Link>
      <div className="flex items-center border w-[20rem] border-secondary rounded-md bg-transparent text-sm p-2 space-x-2">
        <IoSearch />
        <input 
          type="text" 
          placeholder="Search for countries ..."
          className="bg-transparent focus:outline-none placeholder:text-fourth w-full"
        />
      </div>
      <Link to="/about" className="hover:bg-fourth flex items-center justify-center py-1 px-3 transition rounded-full hover:text-primary">About</Link>
    </nav>
  )
}

export default Navbar;