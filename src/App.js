import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import ComA from './Components/ComA';
import { createContext } from 'react';
import UseMemo from './Components/UseMemo';
import UseRef from './Components/UseRef';
import UseReducer from './Components/UseReducer';
import PureCmponent from './Components/PureCmponent';
import HigherOrderComponent from './Components/HigherOrderComponent';
//import Redux from './Components/Redux';
import ReduxDemo from './Components/ReduxDemo';
import FetchReduxList from './Components/FetchReduxList';
import CakeContainer from './Components/CakeContainer';
import HooksCakeContainer from './Components/HooksCakeContainer';
import { Provider } from 'react-redux';
import store from './redux/cakes/store'
import IceCreamContainer from './Components/IceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

const FirstName = createContext();
const LastName = createContext();

function App() {

  return (
    <div>
      {/* context api concept */}
      <FirstName.Provider value="rahul">
        <LastName.Provider value="seth">
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>

      {/* usememo concept */}
      <UseMemo />
      {/* useRef concept */}
      <UseRef />
      {/* useReducer concept */}
      <UseReducer />
      {/* PureComponent concept */}
      <PureCmponent />
      <br></br>
      {/* HigherOrderComponent concept */}
      <HigherOrderComponent />

      <br>
      </br>
      <br></br>
      <ReduxDemo />
      <FetchReduxList />
      <Provider store={store}>
        <div className="App">
          <HooksCakeContainer />
          <CakeContainer />
          <IceCreamContainer />
          <NewCakeContainer />
          <ItemContainer cake/>
          <ItemContainer />
          <UserContainer />
        </div>
      </Provider>
      {/* UI part */}
      {/* <Grid /> */}
    </div>
  );
}

export default App;
export { FirstName, LastName };
