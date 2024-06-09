import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="m-4">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;