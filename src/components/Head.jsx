import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        // getSearchSuggestions();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const stringifiedData = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await stringifiedData.json();
    setSuggestions(data[1]);
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };
  return (
    <div className="grid grid-flow-col fixed bg-white w-full p-4">
      <div className="flex col-span-2">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
          className="h-8 w-8 mr-4 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt="youtube-logo"
            className="h-8"
          />
        </a>
      </div>
      <div className="col-span-8 flex flex-col pl-40">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="w-3/5 h-8 border border-gray-400 rounded-s-full pl-[14px] focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="h-8 w-10 pl-1 border border-gray-400 rounded-e-full bg-slate-100 flex items-center">
            <img
              src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
              alt="search"
              className="h-6"
            />
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="fixed bg-white border shadow-lg w-1/3 mt-8 rounded-xl py-2">
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className="pl-4 hover:bg-gray-100">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-2 justify-self-end">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
