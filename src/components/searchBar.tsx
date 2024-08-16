import { RootState } from "@/redux/store/store";
import { updateQuery } from "@/redux/slices/query";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const query = useSelector((state: RootState) => state.searchReducer.query);
  const dispatch = useDispatch();

  return (
    <div className="relative h-[35px] md:w-[250px] lg:w-[300px]">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-blue-400" // Light blue color for the icon
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="w-full h-full p-4 ps-10 text-sm text-gray-600 border border-blue-300 rounded-lg bg-blue-300/10 outline-none"
        placeholder="Search anything..."
        required
        value={query}
        onChange={(e) => dispatch(updateQuery(e.target.value))}
      />
    </div>
  );
};

export default SearchBar;
