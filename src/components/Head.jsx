import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
  return (
    <div className="grid grid-flow-col mt-4">
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
      <div className="col-span-8 flex pl-40">
        <input type="text" className="w-3/5 h-8 border border-gray-400 rounded-s-full pl-[14px] focus:outline-none" />
        <button className="h-8 w-10 pl-1 border border-gray-400 rounded-e-full bg-slate-100 flex items-center">
          <img
            src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
            alt="search"
            className="h-6"
          />
        </button>
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
