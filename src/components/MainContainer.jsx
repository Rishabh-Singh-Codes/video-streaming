import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="max-w-full flex flex-col pl-4">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
