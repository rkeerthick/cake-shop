import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserContainer />
        {/* <HooksCakeContainer /> */}
        {/* <ItemContainer cake /> */}
        {/* <ItemContainer iceCream /> */}
        {/* <NewCakeContainer /> */}
        {/* <CakeContainer /> */}
        {/* <IceCreamContainer /> */}
      </Provider>
    </div>
  );
}

export default App;
