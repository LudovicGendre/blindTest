import { Provider } from "react-redux";
import Navigation from "../Common/Navigation";
import { store } from "../Common/store";


const App = () => (
  <Provider store={store}>
    <div className="App">
      <Navigation />
    </div>
  </Provider>
);

export default App;
