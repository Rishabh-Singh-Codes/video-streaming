import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="grid-cols-2">
      <ul className="border-b-2 mt-8 mb-4 pb-2">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h2 className="font-bold text-lg">Explore</h2>
      <ul className="border-b-2 mb-4 pb-2">
        <li>Trending</li>
        <li>Music</li>
        <li>News</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Courses</li>
        <li>Podcasts</li>
      </ul>
      <h2 className="font-bold text-lg">More from YouTube</h2>
      <ul className="border-b-2 mb-4 pb-2">
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>
      <ul>
        <li>Settings</li>
        <li>Report History</li>
        <li>Help</li>
        <li>Send feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
