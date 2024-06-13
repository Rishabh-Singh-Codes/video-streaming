import { list } from "../utils/data";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className={`flex max-w-full overflow-x-scroll`}>
      {list.map((item, idx) => (
        <Button name={item} key={idx}/>
      ))}
    </div>
  );
};

export default ButtonList;
