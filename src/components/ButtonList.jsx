import Button from "./Button";

const list = [
  "All",
  "Computer",
  "Software",
  "Stock",
  "Finance",
  "Engineering",
  "Computer",
  "Software",
  "Finance",
  "Engineering",
  "Finance",
  "Engineering",
  "Computer",
  "Software",
  "Finance",
  "Engineering",
  "Finance",
  "Engineering",
  "Computer",
  "Software",
  "Finance",
  "Engineering",
];

const ButtonList = () => {
  return (
    <div className="flex max-w-80 md:max-w-7xl overflow-x-scroll">
      {list.map((item, idx) => (
        <Button name={item} key={idx}/>
      ))}
    </div>
  );
};

export default ButtonList;
