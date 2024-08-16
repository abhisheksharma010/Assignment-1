import { FaChevronRight as RightIcon } from "react-icons/fa";
import { IoPersonCircleSharp as UserIcon } from "react-icons/io5";
import SearchBar from "./searchBar";

const Navbar = () => {
  return (
    <div className="h-[50px] bg-white sticky top-0 left-0 w-full flex justify-between items-center px-5 border-b">
      <h1 className="flex gap-1 items-center">
        Home <RightIcon className="text-xs" />
        <span className="text-blue-800 font-bold">Dashboard V2</span>
      </h1>
      <SearchBar />
      <div className="flex items-center px-2 gap-5">
        <UserIcon className="text-[32px] text-blue-100" />
      </div>
    </div>
  );
};

export default Navbar;
