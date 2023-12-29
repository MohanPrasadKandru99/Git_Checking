import logo from './logo.svg';
import './App.css';
import ReduxDemo from './Components/ReduxDemo';
import { Provider } from 'react-redux';
import Store from './Components/Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <ReduxDemo />
      </Provider>
    </div>
  );
}

export default App;
